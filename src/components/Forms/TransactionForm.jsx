function TransactionForm({ onClose }) {
  return (
    <div>
      <h1>TransactionForm </h1>
      <button
        className="cursor-pointer border p-2"
        onClick={onClose}
      >
        x
      </button>
    </div>
  );
}
export default TransactionForm;
