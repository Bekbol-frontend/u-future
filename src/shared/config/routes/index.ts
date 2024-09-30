export enum AppRoutes {
  HOME = "HOME",
  PRODUCT_DETAIL = "PRODUCT_DETAIL",
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.PRODUCT_DETAIL]: "/product",
};
