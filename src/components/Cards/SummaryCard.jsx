import {
  calculateBalance,
  calculateExpenses,
  calculateIncomes,
} from "../../utils/transactionsUtils";
function SummaryCard({ transactions }) {
  const balance = calculateBalance(transactions);
  const totalIncomes = calculateIncomes(transactions);
  const totalExpenses = calculateExpenses(transactions);

  const cards = [
    { label: "Income", amount: totalIncomes, textColor: "text-green" },
    { label: "Balance", amount: balance },
    { label: "Expense", amount: totalExpenses, textColor: "text-red" },
  ];
  return (
    <div className="mb-10 flex w-full justify-between gap-2">
      {cards.map((card) => (
        <div
          key={card.label}
          className="w-full rounded-lg border border-white shadow-2xl"
        >
          <div className="shadow-inset-white rounded-lg px-2 py-1 text-center">
            <p>{card.label}</p>
            <p className={`font-bold ${card.textColor}`}>{card.amount}€</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default SummaryCard;
