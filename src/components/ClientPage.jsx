import ClientList from "./ClientList";
import MainHeader from "./MainHeader";
import { useState } from "react";

function ClientPage() {
  const [modalisVisisble, setModalVisible] = useState(false);

  function showModalHandler() {
    setModalVisible(true);
  }
  function hideModalHandler() {
    setModalVisible(false);
  }

  return (
    <>
      <MainHeader onCreateNewClient={showModalHandler} />
      <main>
        <ClientList //
          isModalOpen={modalisVisisble}
          onModalClose={hideModalHandler} //
        />
      </main>
    </>
  );
}
export default ClientPage;
