import CategoryCard from "../Cards/CategoryCard";
import ToggleTabs from "../UI/ToggleTabs";

function Homepage({ activeTab, onTabChange, transactions }) {
  const filteredCategories = transactions
    .filter((t) => t.type === activeTab)
    .reduce((category, t) => {
      const existing = category.find((c) => c.category === t.category);
      if (existing) {
        existing.amount += t.amount;
      } else {
        category.push({ category: t.category, type: t.type, amount: t.amount });
      }
      return category;
    }, []);
  return (
    <div>
      <ToggleTabs
        activeTab={activeTab}
        onTabChange={onTabChange}
      />

      <div className="grid grid-cols-3 gap-2">
        {filteredCategories.map((t) => (
          <CategoryCard
            key={t.category}
            transactions={t}
          />
        ))}
      </div>
    </div>
  );
}
export default Homepage;
