import HtmlWebpackPlugin from "html-webpack-plugin";
import { IConfig } from "../../types";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CopyPlugin from "copy-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export const plugins = (config: IConfig) => {
  const { paths, isDev, isProd } = config;

  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new CopyPlugin({
      patterns: [{ from: paths.favicon }],
    }),
    isDev ? new webpack.ProgressPlugin() : undefined,
    isProd
      ? new MiniCssExtractPlugin({
          filename: "styles/[name].[contenthash:8].css",
          chunkFilename: "styles/[name].[contenthash:8].css",
        })
      : undefined,
    isDev && new ReactRefreshWebpackPlugin(),
  ];
};
