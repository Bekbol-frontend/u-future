import { InputHTMLAttributes, memo } from "react";
import styles from "./Input.module.scss";
import { clsx } from "@/shared/clsx";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  addClass?: string;
}

function Input(props: IProps) {
  const { label = "", addClass = "", type = "text", ...otherProps } = props;

  return (
    <div className={clsx([styles.inputWrapper, addClass])}>
      {label && <label className={styles.label} htmlFor={label}>{label}</label>}
      <input type={type} {...otherProps} className={styles.input} />
    </div>
  );
}

export default memo(Input);
