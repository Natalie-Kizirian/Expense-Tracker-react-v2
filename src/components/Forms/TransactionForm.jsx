import { useState, useEffect, useRef } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoReturnUpBack } from "react-icons/io5";
import { LuStickyNote, LuCalendarDays } from "react-icons/lu";

import { expenseCategories, incomeCategories } from "../../config/categoryConfig";
import { categoryColors } from "../../config/categoryConfig";
import ToggleTabs from "../UI/ToggleTabs";
function TransactionForm({ onClose, onAddTransaction, defaultType }) {
  /* states */
  const dateRef = useRef(null);
  const [enteredAmount, setAmount] = useState("");
  const [enteredType, setType] = useState(defaultType);
  const [enteredDate, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [enteredCategory, setCategory] = useState(expenseCategories[0]);

  const categoryType = enteredType === "expense" ? expenseCategories : incomeCategories;
  useEffect(() => {
    setCategory(categoryType[0]);
  }, [enteredType]);

  const cardColor = categoryColors[enteredCategory];
  // SUBMIT FORM HANDLER
  function submitHandler(e) {
    e.preventDefault();
    if (Number(enteredAmount) <= 0) return;

    const amount = Number(enteredAmount);
    const formattedAmount = Number.isInteger(amount) ? amount : parseFloat(amount.toFixed(2));

    const transactionData = {
      id: crypto.randomUUID(),
      amount: formattedAmount,
      date: enteredDate,
      category: enteredCategory,
      type: enteredType,
    };

    onAddTransaction(transactionData);
    onClose();
  }

  // -------- NUMPAD  ----------
  // prettier-ignore
  const numpadKeys = [1, 2, 3, "⌫", 4, 5, 6, "Note", 7, 8, 9, "Date", "$", 0, ".", "✓"];
  // prettier-ignore
  const numpadIcons = {
  "✓": <FaCheck className="w-full" />,
  "⌫": <IoReturnUpBack className="w-full" />,
  "Note": <div className="flex items-center gap-1 justify-center "><LuStickyNote className="min-w-4 " />Note</div>,
  "Date": <div className="flex items-center gap-1 justify-center"><LuCalendarDays className="min-w-4" />Date</div>,
  
};
  // prettier-ignore
  function handleNumpadClick(num) {
  if (num === "⌫") {setAmount(enteredAmount.slice(0, -1));}
  else if (num === ".") {
    if (enteredAmount === "" || enteredAmount.includes(".")) return;
    setAmount(enteredAmount + num);
  }
  else if (num === "Date") dateRef.current.showPicker();
  else if (num === "Note") {} // TODO
  else if (num === "$") {} // TODO
  else if (num !== "✓"){ setAmount(enteredAmount + num)};
}
  return (
    <div>
      {" "}
      <div
        className="fixed inset-0 z-10 bg-black/45"
        onClick={onClose}
      />
      <div className="fixed inset-x-0 top-1/4 bottom-0 z-20 flex w-full flex-col gap-18 rounded-lg bg-[#d1d4f8] md:m-auto md:w-1/2 lg:w-1/3">
        <div className="flex p-3">
          <ToggleTabs
            activeTab={enteredType}
            onTabChange={setType}
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
          action=""
          className="flex flex-col items-center gap-5 p-2 lg:px-12"
        >
          <input
            className="mb-10 w-full border-none bg-transparent text-center text-2xl font-bold placeholder-black focus:outline-none"
            readOnly
            autoFocus
            placeholder="0"
            value={enteredAmount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <div className={` flex w-full flex-col rounded-xl p-3 ${cardColor} shadow-2xl`}>
            <select
              value={enteredCategory}
              className={`cursor-pointer focus:outline-none`}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categoryType.map((c) =>
                // prettier-ignore
                <option value={c} key={c}>
                  {c}
                </option>,
              )}
            </select>
            <input
              ref={dateRef}
              type="date"
              className="pointer-events-none absolute top-0 opacity-0"
              value={enteredDate}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {/* Custom numpad */}
          <div className="grid w-full grid-cols-4 gap-2">
            {numpadKeys.map((num) => (
              <button
                key={num}
                type={num === "✓" ? "submit" : "button"}
                className={`shadow-3xl w-full cursor-pointer rounded-xl p-2 lg:p-3 ${num === "✓" ? "bg-primary text-white" : "bg-white text-black"}`}
                // prettier-ignore
                onClick={() => {handleNumpadClick(num);}}
              >
                {numpadIcons[num] ?? num}
              </button>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}
export default TransactionForm;
