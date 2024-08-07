import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import HomePage from "./Pages/SubMainpage/HomePage";
import BlackPage from "./Pages/SubMainpage/BlackPage";

const App = () => {
  // The Routes of Different Page/Section
  const routes = createBrowserRouter([
    {
      path: "",
      element: <MainPage />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "List",
          element: <BlackPage />,
        },
        {
          path: "Result",
          element: <BlackPage />,
        },
        {
          path: "Doc",
          element: <BlackPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default App;
