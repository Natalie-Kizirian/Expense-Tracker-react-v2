import { categoryColors, categoryIcons } from "../../config/categoryConfig";
import { useSwipeable } from "react-swipeable";
import { useState } from "react";
function TransactionCard({ transaction, openForm, onDelete }) {
  const cardIcon = categoryIcons[transaction.category];
  const cardColor = categoryColors[transaction.category];

  const [isRevealed, setIsRevealed] = useState(false);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIsRevealed(true),
    onSwipedRight: () => setIsRevealed(false),
    trackMouse: true,
    preventScrollOnSwipe: true,
  });
  const handleCardClick = () => {
    if (isRevealed) {
      setIsRevealed(false);
    } else {
      openForm(transaction);
    }
  };
  return (
    <div className="relative overflow-hidden rounded-xl">
      <div className="bg-red shadow-inset-black absolute inset-y-0 right-0 flex items-center px-4">
        <button
          onClick={() => onDelete(transaction.id)}
          className="font-semibold text-white"
        >
          Delete
        </button>
      </div>
      <div
        {...handlers}
        onClick={handleCardClick}
        className={`bg-background border-muted flex cursor-pointer items-center justify-between overflow-y-scroll rounded-xl border p-2 transition-transform duration-200 ${
          isRevealed ? "-translate-x-20 " : "translate-x-0 "
        }`}
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
    </div>
  );
}
export default TransactionCard;
