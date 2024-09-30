import { memo } from "react";
import { clsx } from "@/shared/clsx";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styles from "./LikeLink.module.scss";

function LikeLink() {
  return (
    <NavLink to="/like" className={({ isActive }) => clsx([styles.likeLink])}>
      <FaRegHeart />
    </NavLink>
  );
}

export default memo(LikeLink);
