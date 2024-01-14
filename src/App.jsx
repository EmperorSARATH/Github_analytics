import { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  Sidebar,
  Home,
  Profile,
  Login,
  Repositories,
  Followers,
} from "./components";
import { Context } from "./contexts/Context";

const Layout = () => {
  return (
    <div className="relative flex select-none">
      <div className="fixed z-50 h-screen w-72 flex-none overflow-y-auto bg-slate-50">
        <Sidebar />
      </div>
      <div className="flex h-screen w-full flex-col overflow-y-auto  pl-72">
        <Outlet />
      </div>
      {/* <div className="h-screen flex-auto bg-white pl-72"></div> */}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/repositories",
        element: <Repositories />,
      },
      {
        path: "/followers",
        element: <Followers />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/settings",
        element: <span>Settings</span>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
const App = () => {
  const [dt, setDt] = useState("codermedia");
  const [user_name, setUsername] = useState("codermedia");

  return (
    <div className="App">
      <Context.Provider
        value={{ dta: [dt, setDt], repo_user: [user_name, setUsername] }}
      >
        <RouterProvider router={router} />
      </Context.Provider>
    </div>
  );
};
export default App;
