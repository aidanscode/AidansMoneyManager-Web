import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <span>Hello, world :)</span>
        <Link to='/test'>Click me</Link>
      </div>
    )
  },
  {
    path: '/test',
    element: <div>Testing route</div>
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
