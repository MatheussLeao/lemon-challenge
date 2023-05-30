import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import styles from "./footer.module.css";

export const Footer = () => {
  const url = "https://github.com/MatheussLeao/lemon-challenge";
  
  return (
    <Link className={styles.footer} target="_blank" href={url}>
      <AiFillGithub size={22} />
    </Link>
  )
}