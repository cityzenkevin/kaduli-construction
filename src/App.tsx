import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "./layouts/Dashboard";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Homepage from "./pages/HomePage";
import Properties from "./pages/Properties";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "settings",
        element: <Settings />,
      },{
        path:'properties',
        element: <Properties />
      }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
