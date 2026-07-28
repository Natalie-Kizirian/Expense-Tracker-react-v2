import TransactionCard from "../Cards/TransactionCard";
import { groupByDate, formatDate } from "../../utils/transactionsUtils";

function TransactionsPage({ transactions, openForm, onDelete }) {
  const transactionsByDate = groupByDate(transactions);
  const sortedDates = Object.keys(transactionsByDate).sort(
    (a, b) => new Date(b) - new Date(a),
  );
  return (
    <div className="mb-42 lg:mb-6 lg:w-1/2">
      {sortedDates.map((date) => (
        <div
          key={date}
          className="mb-4 flex flex-col gap-2 rounded-2xl bg-white p-4 shadow-2xl"
        >
          <p>{formatDate(date)}</p>

          {transactionsByDate[date].map((t) => (
            <TransactionCard
              key={t.id}
              transaction={t}
              openForm={openForm}
              onDelete={onDelete}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
export default TransactionsPage;
