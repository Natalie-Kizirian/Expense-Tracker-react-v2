import TransactionCard from "../Cards/TransactionCard";
import { groupByDate } from "../../utils/transactionsUtils";
function TransactionsPage({ transactions }) {
  const transactionsByDate = groupByDate(transactions);
  const sortedDates = Object.keys(transactionsByDate).sort(
    (a, b) => new Date(b) - new Date(a),
  );
  return (
    <div>
      <div className="mb-22">
        {sortedDates.map((date) => (
          <div
            key={date}
            className="mb-4 flex flex-col gap-2 rounded-2xl bg-white p-4 shadow-2xl"
          >
            <p>{date}</p>

            {transactionsByDate[date].map((t) => (
              <TransactionCard
                key={t.id}
                transaction={t}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
export default TransactionsPage;
