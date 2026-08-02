import { categoryColors, categoryIcons } from "../../config/categoryConfig";
import { useSwipeable } from "react-swipeable";
import { FaRegTrashAlt } from "react-icons/fa";
import DeletePopup from "../UI/DeletePopup";

import { useState } from "react";
function TransactionCard({ transaction, openForm, onDelete }) {
  const cardIcon = categoryIcons[transaction.category];
  const cardColor = categoryColors[transaction.category];

  const [isRevealed, setIsRevealed] = useState(false);
  const [deleteAction, setDeleteAction] = useState(null);

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
  function handelDeleteClick(e) {
    e.stopPropagation();
    setDeleteAction(() => () => onDelete(transaction.id));
  }
  return (
    <div className="relative overflow-hidden rounded-xl shadow-2xl">
      {deleteAction && (
        <DeletePopup
          onCancel={() => setDeleteAction(null)}
          onConfirm={() => {
            deleteAction();
            setDeleteAction(null);
          }}
        />
      )}{" "}
      {/* Delete Mobile Screen */}
      <div className="bg-red shadow-inset-black absolute inset-y-0 right-0 flex items-center px-4">
        <button
          onClick={handelDeleteClick}
          className="font-semibold text-white"
        >
          Delete
        </button>
      </div>
      <div
        {...handlers}
        onClick={handleCardClick}
        className={`transaction-card-styles transition-transform duration-200 ${
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

        <div className="flex items-center gap-1">
          <p
            className={`font-semibold ${transaction.type === "expense" ? "text-red" : "text-green"} `}
          >
            {transaction.type === "expense" ? "-" : "+"}
            {transaction.amount}€
          </p>

          {/* Delete Large Screen*/}
          <p
            onClick={handelDeleteClick}
            className="z-40 hidden rounded-lg p-2 hover:bg-white lg:block"
          >
            <FaRegTrashAlt />
          </p>
        </div>
      </div>
    </div>
  );
}
export default TransactionCard;
