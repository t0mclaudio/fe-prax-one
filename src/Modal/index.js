import { useContext } from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";
import { AppContext } from "../context";
import styles from "./styles.module.scss";

let portalRoot = document.getElementById("portal")
if (!portalRoot) {
  portalRoot = document.createElement('div')
  portalRoot.setAttribute('id', 'portal')
  document.body.appendChild(portalRoot)
}

const Modal = ({ isOpen, children }) => {
  const { setIsModalOpen } = useContext(AppContext);
  if (!isOpen) return null;
  return createPortal(
    <aside data-testid='modal' className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <button onClick={() => setIsModalOpen(false)}>
            <FaTimes />
          </button>
        </div>
        {children}
      </div>
    </aside>,
    portalRoot
  );
};

export default Modal;
