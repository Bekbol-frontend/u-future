import { memo } from "react";
import styles from "./CartLink.module.scss";
import { NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { clsx } from "@/shared/clsx";

function CartLink() {
  return (
    <NavLink to="/cart" className={({ isActive }) => clsx([styles.cartLink])}>
      <BsCart3 />
    </NavLink>
  );
}

export default memo(CartLink);
