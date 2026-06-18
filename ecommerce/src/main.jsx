import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import NotFound from './pages/NotFound.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: "products",
        lazy:async ()=>{
        const [module, { loader }] = await Promise.all([
          import("./pages/products/index.jsx"),
          import("./pages/products/loader.js")
        ]);
        return {
           Component: module.default,
           ErrorBoundary: module.ErrorBoundary,
           loader
           };
        }
      }
    ]
  },
  {
    path: "*",
    element:<NotFound/>
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
