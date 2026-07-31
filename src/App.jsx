import { useState, useEffect } from "react";
import { calculateBalance } from "./utils/transactionsUtils";
import Header from "./components/UI/Header";
import Homepage from "./components/Pages/Homepage";
import TransactionsPage from "./components/Pages/TransactionsPage";
import TransactionForm from "./components/Forms/TransactionForm";
import NavBar from "./components/UI/NavBar";
function App() {
  /* States */
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transaction");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("transaction", JSON.stringify(transactions));
  }, [transactions]);

  const [modalisVisible, setModalVisible] = useState(false);
  const [activePage, setActivePage] = useState("home");
  const [activeTab, setActiveTab] = useState("expense");

  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Add - Edit Transaction
  function addTransactionHandler(transactionData) {
    if (selectedTransaction) {
      setTransactions([
        ...transactions.filter((t) => t.id !== transactionData.id),
        transactionData,
      ]);
    } else {
      setTransactions([...transactions, transactionData]);
    }
  }
  //Delete Handler
  const handleDelete = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };
  const balance = calculateBalance(transactions);

  return (
    <div className="flex h-screen flex-col overflow-y-auto bg-linear-to-bl from-[#EFEFFB] to-[#D0D1F7] p-4 lg:items-center lg:text-lg">
      <Header balance={balance} />
      {/* HOMEPAGE */}
      {activePage === "home" && (
        <Homepage
          activeTab={activeTab}
          onTabChange={setActiveTab}
          transactions={transactions}
          openForm={(category) => {
            setModalVisible(true);
            setSelectedCategory(category);
            setSelectedTransaction(null);
          }}
        />
      )}

      {/* TRANSACTIONS PAGE */}
      {activePage === "transactions" && (
        <TransactionsPage
          transactions={transactions}
          openForm={(transaction) => {
            setModalVisible(true);
            setSelectedTransaction(transaction);
            setSelectedCategory(null);
          }}
          onDelete={handleDelete}
        />
      )}

      {modalisVisible && (
        <TransactionForm
          onClose={() => setModalVisible(false)}
          onAddTransaction={addTransactionHandler}
          defaultType={activeTab}
          selectedTransaction={selectedTransaction}
          selectedCategory={selectedCategory}
        />
      )}

      {/* Navigation Bar */}
      <NavBar
        showHomePage={() => setActivePage("home")}
        showTransactionsPage={() => setActivePage("transactions")}
        onShowModal={() => {
          //reseting modal content
          setSelectedTransaction(null);
          setSelectedCategory(null);
          setModalVisible(true);
        }}
        activeMenu={activePage}
      />
    </div>
  );
}

export default App;
