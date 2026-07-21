import { useState } from "react";
import Homepage from "./components/Pages/Homepage";
import TransactionsPage from "./components/Pages/TransactionsPage";
import TransactionForm from "./components/Forms/TransactionForm";
import NavBar from "./components/UI/NavBar";
function App() {
  /* States */
  const [modalisVisible, setModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("expense");

  const [activePage, setActivePage] = useState("home");
  return (
    <div className="flex min-h-screen flex-col bg-linear-to-bl from-[#EFEFFB] to-[#D0D1F7] p-3 py-5 lg:items-center">
      {/* HOMEPAGE */}
      {activePage === "home" && (
        <Homepage
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      )}

      {/* TRANSACTIONS PAGE */}
      {activePage === "transactions" && <TransactionsPage />}

      {modalisVisible && (
        <TransactionForm onClose={() => setModalVisible(false)} />
      )}

      {/* Navigation Bar */}
      <NavBar
        showHomePage={() => setActivePage("home")}
        showTransactionsPage={() => setActivePage("transactions")}
        onShowModal={() => setModalVisible(true)}
      />
    </div>
  );
}

export default App;
