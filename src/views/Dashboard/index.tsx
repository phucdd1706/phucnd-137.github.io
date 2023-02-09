import React, { useEffect } from "react";
import CustomTabs from "~/ui-component/tabs/CustomTabs";
import TabItem from "~/ui-component/tabs/TabItem";
import Subcription from "~/views/Dashboard/Subcription";
import Revenue from "~/views/Dashboard/Revenue";
import { Outlet } from "react-router-dom";

const tabs = [
  {
    name: "Subcription",
    href: "/dashboard/subcription",
    id: 1,
    component: <Subcription />,
  },
  {
    name: "Revenue",
    href: "/dashboard/revenue",
    id: 2,
    component: <Revenue />,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  const [selected, setSelected] = React.useState<string | number>(1);
  const handleClick = (
    tabOrder: string | number,
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setSelected(tabOrder);
  };

  const handlePathChange = () => {
    window.history.pushState(
      {},
      "",
      tabs.find((tab) => tab.id === selected)?.href || ""
    );
  };

  useEffect(() => {
    handlePathChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <div className="flex flex-1 flex-col">
      <CustomTabs value={selected} handleChange={handleClick}>
        {tabs.map((tab) => (
          <TabItem value={tab.id}>{tab.name}</TabItem>
        ))}
      </CustomTabs>
      {tabs.map((tab) => (
        <div
          className={classNames(
            selected === tab.id ? "block" : "hidden",
            "w-full"
          )}
        >
          {tab.component}
        </div>
      ))}
      <Outlet />
    </div>
  );
}
