import React from "react";
import { useLocation } from "react-router-dom";
import menuItems from "~/constants/MenuItems";

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

const Sidebar = () => {
  const pathName = useLocation().pathname.split("/")[1];
  return (
    <div>
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5">
          <div className="mt-5 flex-grow flex flex-col">
            <nav className="flex-1 space-y-1 px-2 pb-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    pathName === item.id
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                    "group flex items-center px-4 py-4 text-sm font-medium rounded-md"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
