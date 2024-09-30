import { IConfig } from "../../types";
import { devServer } from "../devServer";
import { loaders } from "../loaders";
import { plugins } from "../plugins";
import { resolvers } from "../resolvers";

export const webpackConfig = (config: IConfig) => {
  const { paths, mode, isDev } = config;

  return {
    mode,
    entry: paths.entry,
    devtool: isDev ? "inline-source-map" : undefined,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.output,
      clean: true,
      publicPath: "/",
    },
    plugins: plugins(config),
    module: loaders(config),
    resolve: resolvers(config),
    devServer: isDev ? devServer(config) : undefined,
  };
};
