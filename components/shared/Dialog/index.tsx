import { ReactNode } from "react";
import styles from "./dialog.module.css";
import { AiOutlineClose } from "react-icons/ai";

interface DialogProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  closeOnOverlayClick: boolean;
  children?: ReactNode;
}

export const Dialog = (props: DialogProps) => {
  const {
    title,
    isOpen,
    onClose,
    children,
    closeOnOverlayClick = false
  } = props;

  const onClickOverlay = () => {
    if (!closeOnOverlayClick){
      return;
    }
    return onClose();
  }
  
  return (
    <div style={{
      display: `${!isOpen ? "none" : "flex"}`
    }}>
      <div onClick={onClickOverlay} className={styles.overlay}></div>
      <div className={styles.dialog}>
        <div className={styles.dialogHeader}>
          <h2>{title}</h2>
          <AiOutlineClose size={24} onClick={onClose} />
        </div>
        <div className={styles.dialogContent}>
          {children}
        </div>
      </div>
    </div>
  )
}