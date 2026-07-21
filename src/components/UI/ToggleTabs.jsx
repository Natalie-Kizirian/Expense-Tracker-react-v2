function ToggleTabs({ activeTab, onTabChange, options = ["expense", "income"] }) {
  return (
    <div className="px-2 w-full">
      <div className="inset-shadow-md flex justify-between rounded-xl  bg-white p-2 w-full shadow-inset-black">
        {options.map((o) => (
          <h3
            key={o}
            onClick={() => onTabChange(o)}
            className={`w-full cursor-pointer rounded-lg px-5 py-1 capitalize text-center transition-all duration-300 lg:w-1/2 ${activeTab === o ? " bg-active text-white" : "text-black"}`}
          >
            {o}
          </h3>
        ))}
      </div>
    </div>
  );
}
export default ToggleTabs;
