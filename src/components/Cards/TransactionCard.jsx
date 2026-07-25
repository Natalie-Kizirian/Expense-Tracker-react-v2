import { categoryColors, categoryIcons } from "../../config/categoryConfig";
function TransactionCard({ transaction }) {
  const cardIcon = categoryIcons[transaction.category];
  const cardColor = categoryColors[transaction.category];
  return (
    <div className="">
      <div className="bg-background mx-2 flex cursor-pointer items-center justify-between rounded-xl border border-white p-2 shadow-2xl">
        <p
          className={`border-gray rounded-xl border p-3 text-2xl ${cardColor} `}
        >
          {cardIcon}
        </p>
        {transaction.category}
        <span></span>
        <p
          className={`font-semibold ${transaction.type === "expense" ? "text-red" : "text-green"} `}
        >
          {" "}
          {transaction.type === "expense" ? "-" : "+"}
          {transaction.amount}€
        </p>
      </div>
    </div>
  );
}
export default TransactionCard;
