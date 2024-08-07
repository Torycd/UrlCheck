import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MainPage from './Pages/MainPage'
import HomePage from './Pages/SubMainpage/HomePage'
import BlackPage from './Pages/SubMainpage/BlackPage'

const App = () => {
  // The Routes of Different Page/Section
  const routes = createBrowserRouter([
    {
      path: "",
      element: <MainPage/>,
      children : [
        {
          path: "Home",
          element: <HomePage/>,
        },
        {
          path: "BlackList",
          element: <BlackPage/>,
        },
      ]
    }
  ])
  return (
    <RouterProvider router={routes} />
  )
}

export default App