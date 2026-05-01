import classes from "./Modal.module.css";

function Modal({ children, onClose }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose} /> 
      <dialog open className={classes.modal}>
        {" "}
        {children}
      </dialog>
    </>
  );
}
// children prop -> always refers to the content that's passed between the opening and closing tags of my custom compontent( στο <NewPost/> που ειναι μεσα στo ClientList.jsx)
export default Modal;
