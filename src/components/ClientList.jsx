import ClientInfo from "./ClientInfo";
import classes from "./ClientList.module.css"
import NewClientForm from "./NewClientForm";
import Modal from "./Modal";
import { useState } from "react";
function ClientList({ isModalOpen, onModalClose }) {
  const [clients, setClients] = useState([]);

  function addClientsHandler(clientData) {
    // If the new state depends on the old state I should write it like this to update the state
    setClients((existingClients) => [clientData, ...existingClients]);
    /* setClients([clientData , ...clients])*/
  }

  return (
    <>
      {isModalOpen && (
        <Modal onClose={onModalClose}>
          <NewClientForm onCancel={onModalClose} onAddClient={addClientsHandler} />
        </Modal>
      )}

      {clients.length > 0 && (
        <ul className={classes.clientContainer}>
          {clients.map((client) => (
            <ClientInfo key={client.id} name={client.name} total={client.total}  />
          ))}
        </ul>
      )}
      {clients.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h3>No clients yet 💅</h3> <br />
          <p>Add your first one and start building your client list!</p>
        </div>
      )}
    </>
  );
}
export default ClientList;
