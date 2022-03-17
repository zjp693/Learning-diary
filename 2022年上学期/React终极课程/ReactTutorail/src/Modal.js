import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

function Modal() {
  return ReactDOM.createPortal(
    <div className={styles.overlayer}>
      <div className={styles.content}></div>
    </div>,
    document.getElementById("portal-root")
  );
}
export default Modal;