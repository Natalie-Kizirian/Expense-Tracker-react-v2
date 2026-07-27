import { useState, useEffect } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import {
  expenseCategories,
  incomeCategories,
} from "../../config/categoryConfig";
import { categoryColors } from "../../config/categoryConfig";
import ToggleTabs from "../UI/ToggleTabs";
function TransactionForm({ onClose, onAddTransaction, defaultType }) {
  /* states */
  const [enteredAmount, setAmount] = useState("");
  const [enteredType, setType] = useState(defaultType);
  const [enteredDate, setDate] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [enteredCategory, setCategory] = useState(expenseCategories[0]);

  const categoryType =
    enteredType === "expense" ? expenseCategories : incomeCategories;
  useEffect(() => {
    setCategory(categoryType[0]);
  }, [enteredType]);

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
      id: Math.random().toString(36).substring(2),
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
          className="flex h-full flex-col items-center gap-7 p-4"
        >
          {/* Amount Input */}
          <input
            className="w-full border-none bg-transparent text-center text-2xl font-bold placeholder-black focus:outline-none"
            readOnly
            autoFocus
            placeholder="0"
            value={enteredAmount}
            onChange={(e) => setAmount(e.target.value)}
          />
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
                {categoryType.map((c) =>
                  // prettier-ignore
                  <option value={c} key={c}>
                  {c}
                </option>,
                )}
              </select>
            </div>

            {/* Custom numpad */}

            <div className="grid w-full grid-cols-3 gap-2">
              {numpadKeys.map((num) => (
                <button
                  key={num}
                  type={"button"}
                  className={`shadow-3xl active:bg-background w-full cursor-pointer rounded-xl bg-white py-3 font-semibold lg:p-3`}
                  // prettier-ignore
                  onClick={() => {handleNumpadClick(num);}}
                >
                  {numpadIcons[num] ?? num}
                </button>
              ))}
            </div>

            {/* Date */}

            <div className="grid w-full grid-cols-2 justify-between gap-2 text-center">
              <div className="shadow-3xl cursor-pointer rounded-xl bg-white py-3 lg:p-3">
                <input
                  type="date"
                  className="cursor-pointer focus:outline-none"
                  value={enteredDate}
                  onChange={(e) => setDate(e.target.value)}
                />{" "}
              </div>

              <button
                type="submit"
                className="shadow-3xl bg-primary w-full cursor-pointer rounded-xl py-3 text-white"
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default TransactionForm;
