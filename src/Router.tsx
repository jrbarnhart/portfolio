import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
