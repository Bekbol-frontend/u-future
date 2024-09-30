import { ChangeEvent, ReactNode, useCallback, useMemo, useState } from "react";
import { AppContext } from "../config";

interface IProps {
  children: ReactNode;
}

function ContextProvider({ children }: IProps) {
  const [searchProducts, setSearchProducts] = useState("");

  const values = useMemo(
    () => ({
      searchProducts,
      setSearchProducts,
    }),
    [searchProducts]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export default ContextProvider;
