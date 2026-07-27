import { format } from "date-fns";

export function groupByDate(transactions) {
  const transactionsByDate = {};

  transactions.forEach((t) => {
    if (!transactionsByDate[t.date]) transactionsByDate[t.date] = [];
    transactionsByDate[t.date].push(t);
  });

  return transactionsByDate;
}
export function formatDate(date) {
  return format(new Date(date), "dd MMMM yyyy");
}
