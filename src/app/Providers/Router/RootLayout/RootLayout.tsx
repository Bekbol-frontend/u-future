import { Header } from "@/widgets/Header";
import { memo, Suspense } from "react";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <Header />
      <main className="main-block-wrapper">
        <Suspense fallback="loading...">
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default memo(RootLayout);
