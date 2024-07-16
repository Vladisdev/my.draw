import { Home } from '@/pages/home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
  ])

  return <RouterProvider router={router} />
}
