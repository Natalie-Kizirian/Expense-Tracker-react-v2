function ToggleTabs({
  activeTab,
  onTabChange,
  options = ["expense", "income"],
}) {
  return (
    <div className="w-full px-2">
      <div className="inset-shadow-md shadow-inset-black flex w-full justify-between rounded-xl bg-white p-2">
        {options.map((o) => (
          <h3
            key={o}
            onClick={() => onTabChange(o)}
            className={`w-full cursor-pointer rounded-lg px-5 py-1 text-center capitalize transition-all duration-300 lg:w-1/2 ${activeTab === o ? " bg-active text-white" : "text-black"}`}
          >
            {o}
          </h3>
        ))}
      </div>
    </div>
  );
}
export default ToggleTabs;
