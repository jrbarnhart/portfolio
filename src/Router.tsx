import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";
import Credits from "./routes/Credits";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/credits",
      element: <Credits />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
