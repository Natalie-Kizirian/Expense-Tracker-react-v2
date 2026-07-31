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

export function groupByCategory(transactions, type) {
  return transactions
    .filter((t) => t.type === type)
    .reduce((category, t) => {
      const existing = category.find((c) => c.category === t.category);
      if (existing) {
        existing.amount += t.amount;
      } else {
        category.push({ category: t.category, type: t.type, amount: t.amount });
      }
      return category;
    }, []);
}

export function calculateBalance(transactions) {
  return transactions.reduce((total, t) => {
    return t.type === "income" ? total + t.amount : total - t.amount;
  }, 0);
}
export function calculateExpenses(transactions) {
  return transactions
    .filter((t) => t.type === "expense")
    .reduce((total, t) => total + t.amount, 0);
}
export function calculateIncomes(transactions) {
  return transactions
    .filter((t) => t.type === "income")
    .reduce((total, t) => total + t.amount, 0);
}
