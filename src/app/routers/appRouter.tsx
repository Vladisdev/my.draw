import { Home } from '@/pages/home'
import { Layout } from '@/shared/ui'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
