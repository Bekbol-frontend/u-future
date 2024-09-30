import { IProduct } from "@/pages/Home";
import styles from "./ProductItem.module.scss";
import { clsx } from "@/shared/clsx";
import { Button } from "@/shared/ui/Button";
import { Link } from "react-router-dom";
import { routePath } from "@/shared/config/routes";

interface IProps {
  data: IProduct;
}

function ProductItem(props: IProps) {
  const { data } = props;

  return (
    <div className={styles.product}>
      <div className={styles.imageBlock}>
        <img src={data.images[0]} alt={data.title} />
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.title}>{data.title}</h3>
        <p className={styles.desc}>{data.desc}</p>
      </div>
      <div className={styles.footer}>
        <div className={styles.priceBlock}>
          <h1 className={styles.priceTitle}>{data.price} ₸</h1>
        </div>
      </div>

      <Link
        to={`${routePath.PRODUCT_DETAIL}/${data.id}`}
        className={styles.link}
      />
    </div>
  );
}

export default ProductItem;
