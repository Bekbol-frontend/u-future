import { memo } from "react";
import styles from "./ProductDetailLoading.module.scss";
import { Skeleton } from "@/shared/ui/Skeleton";

function ProductDetailLoading() {
  return (
    <div className={styles.block}>
      <div className={styles.left}>
        <Skeleton style={{ maxHeight: 400, minHeight: 200, borderRadius: 5 }} />
        <div className={styles.leftBottom}>
          <Skeleton style={{ maxWidth: 100, height: 70, borderRadius: 5 }} />
          <Skeleton style={{ maxWidth: 100, height: 70, borderRadius: 5 }} />
          <Skeleton style={{ maxWidth: 100, height: 70, borderRadius: 5 }} />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.rightTop}>
          <Skeleton style={{ maxWidth: "100%", height: 20, borderRadius: 5 }} />
          <Skeleton style={{ maxWidth: "70%", height: 10, borderRadius: 5 }} />
          <Skeleton style={{ maxWidth: "90%", height: 10, borderRadius: 5 }} />
          <Skeleton style={{ maxWidth: "50%", height: 10, borderRadius: 5 }} />
        </div>
        <div className={styles.priceBlock}>
          <Skeleton style={{ maxWidth: "20%", height: 10, borderRadius: 5 }} />
          <Skeleton style={{ maxWidth: "30%", height: 20, borderRadius: 5 }} />
        </div>
      </div>
    </div>
  );
}

export default memo(ProductDetailLoading);
