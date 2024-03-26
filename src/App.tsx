import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sidebar from "./_layouts/Sidebar";

const router = createBrowserRouter([
  {
    path: '/',
    element:<Sidebar style="" toggle={()=>(
      console.log("toggle")
    )}/>,
  }
])

const App = () =>{
  return <RouterProvider router={router} />
}

export default App;