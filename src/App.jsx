// import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import HomePage from "./Pages/SubMainpage/HomePage";
import ListPage from "./Pages/SubMainpage/ListPage";
import ResultPage from "./Pages/SubMainpage/ResultPage";
import DocPage from "./Pages/SubMainpage/DocPage";

const App = () => {
  // The Routes of Different Page/Section
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/List",
          element: <ListPage />,
        },
        {
          path: "/Result",
          element: <ResultPage />,
        },
        {
          path: "/Doc",
          element: <DocPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
