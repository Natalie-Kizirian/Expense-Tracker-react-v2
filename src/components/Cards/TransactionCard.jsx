import { categoryColors, categoryIcons } from "../../config/categoryConfig";

function TransactionCard({ transaction, openForm }) {
  const cardIcon = categoryIcons[transaction.category];
  const cardColor = categoryColors[transaction.category];
  return (
    <div
      onClick={() => openForm(transaction)}
      className="bg-background flex cursor-pointer items-center justify-between overflow-y-scroll rounded-xl border border-white p-2 shadow-2xl"
    >
      <div className="flex items-center gap-1">
        <p
          className={`border-gray rounded-xl border p-3 text-2xl ${cardColor} `}
        >
          {cardIcon}
        </p>
        <div className="flex flex-col">
          {transaction.category}
          {/*<p className="text-gray">Note</p>*/}
        </div>
      </div>
      <p
        className={`font-semibold ${transaction.type === "expense" ? "text-red" : "text-green"} `}
      >
        {transaction.type === "expense" ? "-" : "+"}
        {transaction.amount}€
      </p>
    </div>
  );
}
export default TransactionCard;
