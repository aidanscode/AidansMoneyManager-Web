import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import Layout from './components/layout'
import Login from './routes/login'
import { ProvideAuth } from './auth'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Layout>
          <Link to='/login'>Click me</Link>
        </Layout>
      </div>
    )
  },
  {
    path: '/login',
    element: (
      <Layout>
        <Login />
      </Layout>
    )
  }
])

function App() {
  return (
    <ProvideAuth>
      <RouterProvider router={router} />
    </ProvideAuth>
  )
}

export default App
