import { useMemo, useState } from "react";
import styles from "./ImagesDetail.module.scss";
import { clsx } from "@/shared/clsx";

interface IProps {
  images: string[];
}

function ImagesDetail({ images }: IProps) {
  const [index, setIndex] = useState(0);

  // custom-Swiper :)
  const imageList = useMemo(
    () =>
      images.map((image, i) => (
        <div
          key={`${image}_${i}`}
          onClick={() => setIndex(i)}
          className={clsx([styles.imageItem], {
            [styles.active]: Boolean(index === i),
          })}
        >
          <img src={image} alt="image-detail" />
        </div>
      )),
    [images, index]
  );

  return (
    <div className={styles.imageBlock}>
      <div className={styles.top}>
        <img src={images[index]} alt="image-detail" />
      </div>
      <div className={styles.bottom}>{imageList}</div>
    </div>
  );
}

export default ImagesDetail;
