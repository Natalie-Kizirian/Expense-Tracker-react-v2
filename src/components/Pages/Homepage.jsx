import CategoryCard from "../Cards/CategoryCard";
import ToggleTabs from "../UI/ToggleTabs";

function Homepage({ activeTab, onTabChange }) {
  return (
    <div>
      <ToggleTabs
        activeTab={activeTab}
        onTabChange={onTabChange}
      />
      <h2>Homepage</h2>
      <CategoryCard/>
    </div>
  );
}
export default Homepage;
