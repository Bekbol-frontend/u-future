import { Route, Routes } from "react-router-dom";
import RootLayout from "../RootLayout/RootLayout";
import { HomePage } from "@/pages/Home";
import ProducDetail from "@/pages/ProducDetail/ui/ProducDetail";
import { routePath } from "@/shared/config/routes";
import { memo } from "react";
import { NotFoundPage } from "@/pages/NotFoundPage";

function AppRouter() {
  return (
    <Routes>
      <Route path={routePath.HOME} element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path={`${routePath.PRODUCT_DETAIL}/:id`}
          element={<ProducDetail />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default memo(AppRouter);
