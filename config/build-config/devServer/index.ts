import { IConfig } from "../../types";
import { Configuration } from "webpack-dev-server";

export const devServer = (config: IConfig): Configuration => {
  const { paths, port } = config;

  return {
    static: {
      directory: paths.devServer,
    },
    compress: true,
    port,
    hot: true,
    open: true,
    historyApiFallback: true,
  };
};
