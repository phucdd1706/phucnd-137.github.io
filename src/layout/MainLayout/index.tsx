import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Sidebar from "~/layout/Sidebar";
import menuItems from "~/constants/MenuItems";

const MainLayout = () => {
  const pathName = useLocation().pathname.split("/")[1];
  const title = menuItems.find((item) => item.id === pathName)?.name;

  return (
    <div>
      <Sidebar />
      <div className="flex flex-1 flex-col md:pl-64">
        <main className="flex-1">
          <div className="max-w-7xl px-4 sm:px-6 md:px-8 py-10">
            <h1 className="text-3xl font-semibold text-gray-900">{title}</h1>
          </div>
          <div className="max-w-7xl px-4 sm:px-6 md:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
