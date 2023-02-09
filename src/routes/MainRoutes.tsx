// THIRD-PARTY IMPORTS
import React from "react";

// LOCAL IMPORTS
import MainLayout from "~/layout/MainLayout";
import Loadable from "~/ui-component/Loadable";

const Dashboard = Loadable(React.lazy(() => import("~/views/Dashboard")));
const Subcription = Loadable(
  React.lazy(() => import("~/views/Dashboard/Subcription"))
);
const Revenue = Loadable(React.lazy(() => import("~/views/Dashboard/Revenue")));
const PostManagement = Loadable(
  React.lazy(() => import("~/views/Post Management"))
);
const Settings = Loadable(React.lazy(() => import("~/views/Settings")));

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        { path: "*/subcription", element: <Subcription />, index: true },
        { path: "*/revenue", element: <Revenue /> },
      ],
    },
    {
      path: "/post-management",
      element: <PostManagement />,
    },
    { path: "/settings", element: <Settings /> },
  ],
};

export default MainRoutes;
