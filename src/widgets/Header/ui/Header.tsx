import { ChangeEvent, memo, useCallback, useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { routePath } from "@/shared/config/routes";
import { Input } from "@/shared/ui/Input";
import { LikeLink } from "@/shared/ui/LikeLink";
import { CartLink } from "@/shared/ui/CartLink";
import { useAppContext } from "@/shared/hooks/useAppContext";

function Header() {
  const { searchProducts, setSearchProducts } = useAppContext();

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchProducts(event.target.value);
    },
    []
  );

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>
          <Link to={routePath.HOME} className={styles.logo}>
            u-future
          </Link>
          <div className={styles.inputFilterWrapper}>
            <Input
              type="search"
              placeholder="Search products..."
              value={searchProducts}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
