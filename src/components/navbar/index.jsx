import { Link } from 'react-router-dom'
import { useAuth } from '../../auth'

function Navbar() {
  const auth = useAuth()

  const tryLogout = async e => {
    e.preventDefault()
    const error = await auth.logOut()
    if (error) alert(error)
  }

  return (
    <nav
      className='navbar navbar-expand-lg bg-dark border-bottom border-body mb-4'
      data-bs-theme='dark'
    >
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          AMM
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
          </ul>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            {auth.user ? (
              <li className='nav-item'>
                <Link className='nav-link' to='/logout' onClick={tryLogout}>
                  Log Out
                </Link>
              </li>
            ) : (
              <li className='nav-item'>
                <Link className='nav-link' to='/login'>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
