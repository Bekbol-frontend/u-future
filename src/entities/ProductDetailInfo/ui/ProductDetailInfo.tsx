import { IProduct } from "@/pages/Home";
import { memo, useCallback } from "react";
import styles from "./ProductDetailInfo.module.scss";
import ImagesDetail from "./ImagesDetail/ImagesDetail";
import { Button } from "@/shared/ui/Button";
import { useNavigate } from "react-router-dom";

interface IProps {
  data: IProduct;
}

function ProductDetailInfo(props: IProps) {
  const { data } = props;
  const { title, images, desc, price } = data;

  const navigate = useNavigate();

  const clickNavigate = useCallback(() => {
    navigate(-1);
  }, []);

  return (
    <div className={styles.block}>
      <div className={styles.left}>
        <ImagesDetail images={images} />
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.desc}>{desc}</p>

        <div className={styles.priceBlock}>
          <h1>{price} ₸</h1>
        </div>
        <Button onClick={clickNavigate} btn_type="primary">
          назад
        </Button>
      </div>
    </div>
  );
}

export default memo(ProductDetailInfo);
