// THIRD IMPORT
interface TabItemProps {
  children: React.ReactNode[] | React.ReactNode | string;
  value: string | number;
  activeOrder?: React.ReactNode;
  handleChange?: (
    index: string | number,
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  id?: string;
  index?: number;
}

export default function TabItem(
  props: TabItemProps & React.HTMLAttributes<HTMLLIElement>
) {
  const { children, value, activeOrder, handleChange, id, index } = props;
  const active = activeOrder === value;
  const options = {
    activeClasses:
      "inline-block p-4 rounded-t-lg border-b-2 border-transparent text-[#6558f5] border-[#6558f5]",
    inactiveClasses:
      "inline-block p-4 rounded-t-lg border-b-2 border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300",
    onShow: () => {
      console.log("tab is shown");
    },
  };

  return (
    <li className="mr-2" role="presentation">
      <button
        className={active ? options.activeClasses : options.inactiveClasses}
        id={id}
        tabIndex={index}
        key={value}
        onClick={(event) => handleChange?.(value, event)}
        type="button"
        role="tab"
      >
        {children}
      </button>
    </li>
  );
}
