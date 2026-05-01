import classes from "./ClientInfo.module.css";

function ClientInfo({ name, total }) {
  return (
    <li className={classes.clientCard}>
      <p>
        Name: <strong>{name}</strong>
      </p>
      <p>
        Total Income: <strong>{total}€</strong>
      </p>
    </li>
  );
}
export default ClientInfo;
