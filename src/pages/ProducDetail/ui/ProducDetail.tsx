import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProducDetail.module.scss";
import { ProductDetailInfo } from "@/entities/ProductDetailInfo";
import { IProduct } from "@/pages/Home";
import { api } from "@/shared/api";
import { AxiosError } from "axios";
import { NotFoundPage } from "@/pages/NotFoundPage";
import ProductDetailLoading from "./ProductDetailLoading/ProductDetailLoading";

function ProducDetail() {
  const productID = useParams<{ id?: string }>();
  const { id } = productID;

  const [data, setData] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getProductId = async (id: string) => {
    try {
      setLoading(true);
      const response = await api.get<IProduct>(`/products/${id}`);

      if (response.status !== 200) throw new Error();

      setData(response.data);
    } catch (error) {
      setError("Запрос не выполнен, код состояния 404.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getProductId(id);
    }

    return () => {
      setData(null);
      setError(null);
      setLoading(false);
    };
  }, [id]);

  if (!id) {
    return (
      <section className={styles.producDetail}>
        <div className="container">
          <NotFoundPage />
        </div>
      </section>
    );
  }

  if (loading) {
    return (
      <section className={styles.producDetail}>
        <div className="container">
          <ProductDetailLoading />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.producDetail}>
        <div className="container">
          <NotFoundPage errorTitle={error} />
        </div>
      </section>
    );
  }

  return (
    <section className={styles.producDetail}>
      <div className="container">
        {data && <ProductDetailInfo data={data} />}
      </div>
    </section>
  );
}

export default memo(ProducDetail);
