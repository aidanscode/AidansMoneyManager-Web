import { useState } from 'react'
import { useAuth } from '../../auth'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [pending, setPending] = useState(false)

  const auth = useAuth()

  const tryLogin = async () => {
    setPending(true)
    const error = await auth.logIn(email, password)
    if (error) {
      setError(error)
    } else {
      setError('')
    }
    setPending(false)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!pending) {
      tryLogin()
    }
  }

  return (
    <div className='container'>
      <h1 className='text-center'>Log In</h1>
      <form onSubmit={handleSubmit}>
        <div className='bg-light rounded p-4 mx-auto'>
          <div className='mb-3'>
            <label htmlFor='login-email' className='form-label'>
              Email
            </label>
            <input
              type='email'
              className='form-control'
              id='login-email'
              name='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required={true}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='login-password' className='form-label'>
              Password
            </label>
            <input
              type='password'
              className='form-control'
              id='login-password'
              name='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              required={true}
            />
          </div>

          <button
            className='btn btn-primary mx-auto'
            type='submit'
            disabled={pending}
          >
            Log In
            {pending && (
              <div
                className='spinner-border spinner-border-sm ms-2'
                role='status'
              >
                <span className='visually-hidden'>Loading...</span>
              </div>
            )}
          </button>
          {error && (
            <p className='text-danger fs-6 fst-italic mt-2 mb-0'>
              Error: {error}
            </p>
          )}
          {auth.user && (
            <p className='text-success fs-6 fst-italic mt-2 mb-0'>
              Welcome, {auth.user.email}!
            </p>
          )}
        </div>
      </form>
    </div>
  )
}

export default Login
