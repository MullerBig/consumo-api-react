import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
import './css/index.css'
import App from './App.jsx'
import Home from "./pages/Home.jsx"
import NewPost from './pages/NewPost.jsx'

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "/new",
        element:<NewPost/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
