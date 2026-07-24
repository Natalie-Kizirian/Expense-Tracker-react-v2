import { categoryColors, categoryIcons } from "../../config/categoryConfig";
function CategoryCard({ transactions }) {
  const cardIcon = categoryIcons[transactions.category];
  const cardColor = categoryColors[transactions.category];
  return (
    <div
      className={`shadow-3xl flex w-full cursor-pointer flex-col gap-2 rounded-xl border border-white p-3 ${cardColor} `}
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium md:text-lg">{transactions.amount}$</p>

        <p className="text-xl md:text-2xl">{cardIcon}</p>
      </div>
      <h1 className="text-sm capitalize md:text-lg">{transactions.category}</h1>
    </div>
  );
}
export default CategoryCard;
