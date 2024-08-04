import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const Protected = ({ children }) => {
  const navigate = useNavigate()
  const auth = useAuth()
  const user = auth.user
  const ready = auth.ready

  useEffect(() => {
    if (ready && !user) navigate('/login', { replace: true })
  }, [ready, user])

  return <>{children}</>
}

export const NoAuth = ({ children }) => {
  const navigate = useNavigate()
  const auth = useAuth()
  const user = auth.user
  const ready = auth.ready

  useEffect(() => {
    if (ready && user) navigate('/budget', { replace: true })
  }, [ready, user])

  return <>{children}</>
}

export const useAuth = () => {
  return useContext(AuthContext)
}

const useProvideAuth = () => {
  const [ready, setReady] = useState(false)
  const [user, setUser] = useState(null)
  const [tokenExpiry, setTokenExpiry] = useState(null)

  const logIn = async (email, password) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      })
      const body = await response.json()
      if ('errors' in body) {
        return body.errors.join(', ')
      }
      const parsed = parseAuthToken(body.authToken)
      setUser(parsed.user)
      setTokenExpiry(parsed.expiry)
      return null
    } catch (error) {
      console.error('Failed to login', error)
      return 'An unexpected error occurred'
    }
  }

  const logOut = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (!response.ok) {
        return 'An unexpected error occurred'
      }
      setUser(null)
      setTokenExpiry(null)
    } catch (error) {
      console.error('Failed to log out', error)
      return 'An unexpected error occurred'
    }
  }

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch('/api/auth/whoami', {
        method: 'POST'
      })
      if (response.ok) {
        const body = await response.json()
        setUser(body.user)
        setTokenExpiry(body.exp)
      }
      setReady(true)
    }
    checkAuth()
  }, [])

  return {
    ready,
    user,
    logIn,
    logOut
  }
}

const parseAuthToken = authToken => {
  const split = authToken.split('.')
  const payload = JSON.parse(atob(split[1]))
  const user = { id: payload.id, email: payload.email }
  const expiry = payload.exp

  return { user, expiry }
}
