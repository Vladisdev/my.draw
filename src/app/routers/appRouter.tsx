import { Home } from '@/pages/home'
import { routes } from '@/shared/router'
import { Layout } from '@/shared/ui'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: routes.home,
      element: <Layout />,
      children: [
        {
          path: routes.home,
          element: <Home />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
