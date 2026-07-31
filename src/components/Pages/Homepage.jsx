import CategoryCard from "../Cards/CategoryCard";
import ToggleTabs from "../UI/ToggleTabs";
import { groupByCategory } from "../../utils/transactionsUtils";

function Homepage({ activeTab, onTabChange, transactions, openForm }) {
  const filteredCategories = groupByCategory(transactions, activeTab);

  return (
    <div className="flex flex-col gap-5 lg:w-1/2">
      <ToggleTabs
        activeTab={activeTab}
        onTabChange={onTabChange}
      />

      <div className="grid min-w-0 grid-cols-2 gap-2 min-[355px]:grid-cols-3 sm:gap-4">
        {filteredCategories.map((t) => (
          <CategoryCard
            openForm={openForm}
            key={t.category}
            transactions={t}
          />
        ))}
      </div>
    </div>
  );
}
export default Homepage;
