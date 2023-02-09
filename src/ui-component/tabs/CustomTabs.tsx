import React from "react";

interface CustomTabsProps {
  children: React.ReactNode[] | React.ReactNode;
  value: number | string;
  key?: number | any;
  handleChange?: (
    newValue: number | string,
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

export default function CustomTabs(props: CustomTabsProps) {
  const [activeTab, setActiveTab] = React.useState(props.value);
  const handleChange =
    props.handleChange ||
    ((newValue: number | string) => {
      setActiveTab(newValue);
    });

  return (
    <div className="mb-4 border-gray-200 w-fit">
      <ul
        className="flex flex-wrap -mb-px text-base font-medium text-center"
        key={props.key | 1}
        id="myTab"
        data-tabs-toggle="#myTabContent"
        role="tablist"
      >
        {React.Children.map(props.children, (child, index) => {
          return React.cloneElement(child as React.ReactElement, {
            index,
            handleChange,
            activeOrder: props.handleChange ? props.value : activeTab,
          });
        })}
      </ul>
    </div>
  );
}
