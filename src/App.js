import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import Layout from './components/layout'
import Login from './routes/login'
import Budget from './routes/budget'
import { NoAuth, Protected, ProvideAuth } from './auth'
import { ProvideFormatting } from './util/formatting'

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
      <NoAuth>
        <Layout>
          <Login />
        </Layout>
      </NoAuth>
    )
  },
  {
    path: '/budget',
    element: (
      <Protected>
        <Layout>
          <Budget />
        </Layout>
      </Protected>
    )
  }
])

function App() {
  return (
    <ProvideAuth>
      <ProvideFormatting>
        <RouterProvider router={router} />
      </ProvideFormatting>
    </ProvideAuth>
  )
}

export default App
