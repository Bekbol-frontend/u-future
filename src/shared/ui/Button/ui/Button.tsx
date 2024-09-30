import { ButtonHTMLAttributes, ReactNode, useMemo } from "react";
import styles from "./Button.module.scss";
import { clsx } from "@/shared/clsx";

type Btn_Type = "primary" | "default" | "dashed";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  addClass?: string;
  btn_type?: Btn_Type;
}

function Button(props: IProps) {
  const {
    children,
    addClass = "",
    btn_type = "default",
    ...otherProps
  } = props;

  const mods = useMemo(
    () => ({
      [styles[btn_type]]: true,
    }),
    [btn_type]
  );

  return (
    <button className={clsx([styles.btn, addClass], mods)} {...otherProps}>
      {children}
    </button>
  );
}

// Бул жерде (props children) болганы ушын memo-колданбадым
// memo -> Primitve props колдандым
export default Button;
