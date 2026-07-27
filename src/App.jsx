import { useState } from "react";
import Homepage from "./components/Pages/Homepage";
import TransactionsPage from "./components/Pages/TransactionsPage";
import TransactionForm from "./components/Forms/TransactionForm";
import NavBar from "./components/UI/NavBar";
function App() {
  /* States */
  const [transactions, setTransactions] = useState([]);
  const [modalisVisible, setModalVisible] = useState(false);

  const [activePage, setActivePage] = useState("home");
  const [activeTab, setActiveTab] = useState("expense");
  const [selectedTransaction, setSelectedTransaction] = useState(null);

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

  return (
    <div className="flex min-h-screen flex-col bg-linear-to-bl from-[#EFEFFB] to-[#D0D1F7] p-4 lg:items-center lg:text-lg">
      {/* HOMEPAGE */}
      {activePage === "home" && (
        <Homepage
          activeTab={activeTab}
          onTabChange={setActiveTab}
          transactions={transactions}
        />
      )}

      {/* TRANSACTIONS PAGE */}
      {activePage === "transactions" && (
        <TransactionsPage
          transactions={transactions}
          openForm={(transaction) => {
            setSelectedTransaction(transaction);
            setModalVisible(true);
          }}
        />
      )}

      {modalisVisible && (
        <TransactionForm
          onClose={() => setModalVisible(false)}
          onAddTransaction={addTransactionHandler}
          defaultType={activeTab}
          selectedTransaction={selectedTransaction}
        />
      )}

      {/* Navigation Bar */}
      <NavBar
        showHomePage={() => setActivePage("home")}
        showTransactionsPage={() => setActivePage("transactions")}
        onShowModal={() => {
          setSelectedTransaction(null);
          setModalVisible(true);
        }}
        activeMenu={activePage}
      />
    </div>
  );
}

export default App;
