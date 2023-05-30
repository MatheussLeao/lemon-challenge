import { AiOutlineArrowLeft } from "react-icons/ai";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <span><AiOutlineArrowLeft size={24} /></span>
      <h2>Lemon</h2>
    </header>
  )
}