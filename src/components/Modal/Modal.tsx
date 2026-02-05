import { createPortal } from "react-dom";

import styles from "./Madal.module.css";

interface ModalProps {
  children: React.ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
  return createPortal(
    <>
      <div className={styles.backdrop} />
      <dialog open className={styles.modal}>{children}</dialog>
    </>,
    document.body,
  );
};
