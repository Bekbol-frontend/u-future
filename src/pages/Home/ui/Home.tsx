import { api } from "@/shared/api";
import { memo, useEffect, useMemo, useState } from "react";
import { IProduct } from "../model/types/product";
import { AxiosError } from "axios";
import { ProductItem } from "@/entities/ProductItem";
import styles from "./Home.module.scss";
import { useAppContext } from "@/shared/hooks/useAppContext";
import useDebounce from "@/shared/hooks/useDebounce";
import EmptyImage from "@/shared/assets/empty-image/empty_cart.png";
import SkeletonItem from "./SkeletonItem/SkeletonItem";
import { Sort } from "@/shared/ui/Sort";

function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);
  const [sortProduct, setSortProduct] = useState("");

  const { searchProducts } = useAppContext();

  const searchDebounceVal = useDebounce(searchProducts, 300);

  const getProducts = async (search?: string, sort?: string) => {
    try {
      setLoading(true);
      const response = await api.get<IProduct[]>(
        `/products?q=${search}&_sort=${sort}`
      );

      if (response.status !== 200) throw new Error();

      setProducts(response.data);
    } catch (error) {
      const err = error as AxiosError;
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts(searchDebounceVal, sortProduct);
  }, [searchDebounceVal, sortProduct]);

  const productList = useMemo(
    () =>
      products.map((product) => (
        <ProductItem key={product.id} data={product} />
      )),
    [products]
  );

  const arraySkeleton = Array(8).fill("");

  const changeSortProduct = (val: string) => {
    setSortProduct(val);
  };

  if (loading) {
    return (
      <section className={styles.section}>
        <div className="container">
          <div className={styles.productsListSkeleton} style={{ gap: 17 }}>
            {arraySkeleton.map((_, index) => (
              <SkeletonItem key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }
  if (error) {
    return (
      <section>
        <div className="container">
          <div></div>
        </div>
      </section>
    );
  }
  if (!products.length) {
    return (
      <section className={styles.section}>
        <div className="container">
          <div className={styles.notProducts}>
            {searchProducts ? (
              <>
                <h1 className={styles.notProductsTitle}>
                  К сожалению, по запросу {`(${searchProducts})`} ничего не
                  найдено
                </h1>
                <div className={styles.emptyImageWrapper}>
                  <img src={EmptyImage} alt="empty-image" />
                </div>
              </>
            ) : null}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <Sort
          addClass={styles.sortHome}
          value={sortProduct}
          changeSort={changeSortProduct}
          defaultText="Сортировка по"
          options={[
            { value: "title", text: "Названию" },
            { value: "price", text: "Цену" },
          ]}
        />
        <div className={styles.productsList}>{productList}</div>
      </div>
    </section>
  );
}

export default memo(Home);
