import { HtmlHTMLAttributes } from "react";
import styles from "./button.module.css";

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button = (props: ButtonProps) => {
  const { label } = props;
  return (
    <button
      className={styles.myButton}
      {...props}
    >
      {label}
    </button>
  )
}