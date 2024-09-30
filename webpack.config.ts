import path from "path";
import webpack from "webpack";
import { webpackConfig } from "./config/build-config/webpack";
import { IEnv, IPaths } from "./config/types";

export default (env: IEnv): webpack.Configuration => {
  const mode = env.mode || "development";
  const port = env.port || 8080;
  const isDev = mode === "development";
  const isProd = mode === "production";

  const paths: IPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    devServer: path.join(__dirname, "public"),
    srcAlias: path.resolve(__dirname, "src"),
    favicon: path.resolve(__dirname, "public", "favicon.png"),
  };

  return webpackConfig({
    paths,
    mode,
    isDev,
    isProd,
    port,
  });
};
