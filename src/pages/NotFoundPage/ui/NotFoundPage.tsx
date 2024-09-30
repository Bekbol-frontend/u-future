import { memo } from "react";
import ImageNotFound from "@/shared/assets/not-found/not-found.jpg";
import styles from "./NotFoundPage.module.scss";
import { Link } from "react-router-dom";
import { routePath } from "@/shared/config/routes";

interface IProps {
  errorTitle?: string;
}

function NotFoundPage({ errorTitle }: IProps) {
  return (
    <div className={styles.block}>
      <h1>{errorTitle ? errorTitle : "Данной страницы не существует"}</h1>
      <div className={styles.imageBlock}>
        <img src={ImageNotFound} alt="image-not-found" />
      </div>
      <Link to={routePath.HOME} className={styles.link}>На главную</Link>
    </div>
  );
}

export default memo(NotFoundPage);
