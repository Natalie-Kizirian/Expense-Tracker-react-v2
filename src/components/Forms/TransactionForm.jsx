import { useState } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import NotePopup from "./NotePopup";
// prettier-ignore
import {expenseCategories, incomeCategories, categoryColors} from "../../config/categoryConfig";

import ToggleTabs from "../UI/ToggleTabs";
function TransactionForm({
  onClose,
  onAddTransaction,
  defaultType,
  selectedTransaction,
  selectedCategory,
}) {
  /* STATES */
  const [enteredAmount, setAmount] = useState(
    selectedTransaction?.amount?.toString() || "",
  );
  const [enteredType, setType] = useState(
    selectedTransaction?.type || defaultType,
  );
  const categoryType =
    enteredType === "expense" ? expenseCategories : incomeCategories;

  const [enteredDate, setDate] = useState(
    selectedTransaction?.date || new Date().toISOString().split("T")[0],
  );
  const [enteredCategory, setCategory] = useState(
    selectedTransaction?.category || selectedCategory || categoryType[0],
  );
  const [inputRevealed, setInputRevealed] = useState(false);
  const [enteredNote, setNote] = useState(selectedTransaction?.note || "");

  function handleTypeChange(type) {
    setType(type);
    setCategory(
      type === "expense" ? expenseCategories[0] : incomeCategories[0],
    );
  }

  const cardColor = categoryColors[enteredCategory];
  // SUBMIT FORM HANDLER
  function submitHandler(e) {
    e.preventDefault();
    if (Number(enteredAmount) <= 0) return;

    const amount = Number(enteredAmount);
    const formattedAmount = Number.isInteger(amount)
      ? amount
      : parseFloat(amount.toFixed(2));

    const transactionData = {
      //id: crypto.randomUUID(),
      id: selectedTransaction?.id || Math.random().toString(36).substring(2),
      amount: formattedAmount,
      date: enteredDate,
      category: enteredCategory,
      type: enteredType,
      note: enteredNote,
    };

    onAddTransaction(transactionData);
    onClose();
  }

  // -------- NUMPAD  ----------
  // prettier-ignore
  const numpadKeys = [1, 2, 3, 4, 5, 6,7, 8, 9,".",0 ,"⌫", ];
  const numpadIcons = {
    "⌫": <IoReturnUpBack className="w-full" />,
  };

  function handleNumpadClick(num) {
    if (num === "⌫") {
      setAmount(enteredAmount.slice(0, -1));
    } else if (num === ".") {
      if (enteredAmount === "" || enteredAmount.includes(".")) return;
      setAmount(enteredAmount + num);
    } else {
      setAmount(enteredAmount + num);
    }
  }
  return (
    <div>
      <div
        className="fixed inset-0 z-10 bg-black/45"
        onClick={onClose}
      />
      <div className="fixed inset-x-0 bottom-0 z-20 flex max-h-[85vh] w-full flex-col gap-7 rounded-t-3xl bg-[#d1d4f8] pb-[env(safe-area-inset-bottom)] md:inset-0 md:m-auto md:h-fit md:w-1/2 md:rounded-2xl lg:w-1/3">
        <div className="flex p-3">
          <ToggleTabs
            activeTab={enteredType}
            onTabChange={handleTypeChange}
          />
          <button
            className="cursor-pointer px-3 text-2xl"
            onClick={onClose}
          >
            x
          </button>
        </div>
        <form
          onSubmit={submitHandler}
          className="flex h-full flex-col items-center gap-7 p-4"
        >
          <div className="flec flex-col justify-center">
            {/* Amount Input */}
            <input
              className="w-full border-none bg-transparent text-center text-2xl font-bold placeholder-black focus:outline-none"
              readOnly
              autoFocus
              placeholder="0"
              value={enteredAmount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <p className="text-center">{enteredNote}</p>
          </div>

          <div className="flex w-full flex-col gap-2">
            {/* Select */}
            <div
              className={`flex w-full flex-col rounded-xl p-2 ${cardColor} shadow-2xl`}
            >
              <select
                value={enteredCategory}
                className={`cursor-pointer focus:outline-none`}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categoryType.map((c) => (
                  <option
                    value={c}
                    key={c}
                  >
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* NOTE POPUP */}
            {inputRevealed && (
              <div>
                <NotePopup
                  onClose={() => setInputRevealed(false)}
                  onSubmitNote={(note) => {
                    setNote(note);
                    setInputRevealed(false);
                  }}
                  note={enteredNote}
                />
              </div>
            )}
            {/* Custom numpad */}

            <div className="grid w-full grid-cols-3 gap-2">
              {numpadKeys.map((num) => (
                <button
                  key={num}
                  type={"button"}
                  className={`white-button font-semibold`}
                  // prettier-ignore
                  onClick={() => {handleNumpadClick(num);}}
                >
                  {numpadIcons[num] ?? num}
                </button>
              ))}
            </div>

            {/* Date */}

            <div className="grid w-full grid-cols-3 justify-between gap-2 text-center">
              <div className="white-button">
                <input
                  type="date"
                  className="cursor-pointer focus:outline-none"
                  value={enteredDate}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <button
                onClick={() => setInputRevealed(true)}
                className="white-button"
                type="button"
              >
                Note
              </button>

              <button
                type="submit"
                className={`primary-button`}
              >
                {selectedTransaction ? "Save" : "Add"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default TransactionForm;
