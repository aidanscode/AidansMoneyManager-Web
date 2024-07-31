import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}

const useProvideAuth = () => {
  const [user, setUser] = useState(null)
  const [authToken, setAuthToken] = useState(null)
  const [authTokenExpiry, setAuthTokenExpiry] = useState(null)

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
      setAuthToken(body.authToken)
      setAuthTokenExpiry(parsed.expiry)
      return null
    } catch (error) {
      console.error('Failed to login', error)
      return 'An unexpected error occurred'
    }
  }

  // useEffect(() => {
  //   //try find key in local storage, validate if so
  // }, [])

  return {
    user,
    logIn
  }
}

const parseAuthToken = authToken => {
  const split = authToken.split('.')
  const payload = JSON.parse(atob(split[1]))
  const user = { id: payload.id, email: payload.email }
  const expiry = payload.exp

  return { user, expiry }
}
