import { useState, useEffect } from "react";
import {
  expenseCategories,
  incomeCategories,
} from "../../config/categoryConfig";
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

  function submitHandler(e) {
    e.preventDefault();

    const transactionData = {
      id: crypto.randomUUID(),
      amount: Number(enteredAmount),
      date: enteredDate,
      category: enteredCategory,
      type: enteredType,
    };
    onAddTransaction(transactionData);
    onClose();
  }
  return (
    <div>
      {" "}
      <div
        className="fixed inset-0 z-10 bg-black/45"
        onClick={onClose}
      />
      <div className="fixed inset-x-2 top-1/4 bottom-2 z-20 flex flex-col gap-2 rounded-lg border bg-[#d1d4f8] p-4 lg:inset-x-1/3">
        <div className="flex">
          <ToggleTabs
            activeTab={enteredType}
            onTabChange={setType}
          />
          <button
            className="cursor-pointer border px-3"
            onClick={onClose}
          >
            x
          </button>
        </div>
        <form
          onSubmit={submitHandler}
          action=""
          className="flex flex-col items-center gap-5"
        >
          {" "}
          <input
            className="border"
            type="number"
            name=""
            id="amount"
            placeholder="Amount"
            value={enteredAmount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <div className="flex flex-col">
            <select
              value={enteredCategory}
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
            <input
              type="date"
              name=""
              id=""
              value={enteredDate}
              onChange={(e) => setDate(e.target.value)}
            />

            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default TransactionForm;
