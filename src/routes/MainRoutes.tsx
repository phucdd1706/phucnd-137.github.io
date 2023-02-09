// THIRD-PARTY IMPORTS
import React from "react";

// LOCAL IMPORTS
import MainLayout from "~/layout/MainLayout";
import Loadable from "~/ui-component/Loadable";

const Dashboard = Loadable(React.lazy(() => import("~/views/Dashboard")));
const PostManagement = Loadable(
  React.lazy(() => import("~/views/Post Management"))
);
const Settings = Loadable(React.lazy(() => import("~/views/Settings")));

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    { path: "/dashboard", element: <Dashboard />, index: true },
    {
      path: "/post-management",
      element: <PostManagement />,
    },
    { path: "/settings", element: <Settings /> },
  ],
};

export default MainRoutes;
