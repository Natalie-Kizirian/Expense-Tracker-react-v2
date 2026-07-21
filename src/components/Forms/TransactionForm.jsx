import { useState } from "react";
function TransactionForm({ onClose, onAddTransaction }) {
  /* states */
  const [enteredAmount, setAmount] = useState("");
  const [enteredType, setType] = useState("");
  const [enteredCategory, setCategory] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    const transactionData = {
      amount: Number(enteredAmount),
      date: new Date().toISOString().split("T")[0],
      category: enteredCategory,
      type: enteredType,
    };
    onAddTransaction(transactionData);
    onClose();
  }
  return (
    <div>
      <h1>TransactionForm </h1>
      <button
        className="cursor-pointer border p-2"
        onClick={onClose}
      >
        x
      </button>
      <form
        onSubmit={submitHandler}
        action=""
      >
        <input
          className="border"
          type="number"
          name=""
          id="amount"
          placeholder="Amount"
          value={enteredAmount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
export default TransactionForm;
