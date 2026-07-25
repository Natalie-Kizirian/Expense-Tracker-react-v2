export function groupByDate(transactions) {
  const transactionsByDate = {};

  transactions.forEach((t) => {
    if (!transactionsByDate[t.date]) transactionsByDate[t.date] = [];
    transactionsByDate[t.date].push(t);
  });

  return transactionsByDate;
}
