import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MainPage from './Pages/MainPage'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <MainPage/>,
      children : []
    }
  ])
  return (
    <RouterProvider router={routes} />
  )
}

export default App