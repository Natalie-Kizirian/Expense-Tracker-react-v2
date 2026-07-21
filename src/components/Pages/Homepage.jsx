import CategoryCard from "../Cards/CategoryCard";
import ToggleTabs from "../UI/ToggleTabs";

function Homepage({ activeTab, onTabChange, transactions }) {
    
  return (
    <div>
      <ToggleTabs
        activeTab={activeTab}
        onTabChange={onTabChange}
      />
      
      <div className="grid grid-cols-3 gap-2">
        {transactions.map((t)=>(
             <CategoryCard key={t.id} transactions={t}/>
        ))}
       
      </div>
    </div>
  );
}
export default Homepage;
