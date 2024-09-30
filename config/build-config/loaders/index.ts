import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { IConfig } from "../../types";
import ReactRefreshTypeScript from "react-refresh-typescript";

export const loaders = (config: IConfig) => {
  const { isProd, isDev } = config;

  return {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve("ts-loader"),
            options: {
              getCustomTransformers: () => ({
                before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
              }),
              transpileOnly: isDev,
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          isProd ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader",
            options: {
              esModule: false,
              modules: {
                namedExport: false,
                auto: (resPath: string) =>
                  Boolean(resPath.includes(".module.")),
                localIdentName: isDev
                  ? "[path][name]-[hash:base64:5]"
                  : "[hash:base64:10]",
              },
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name: "assets/images/[name].[ext]",
        },
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [{ loader: "@svgr/webpack", options: { icon: true } }],
      },
    ],
  };
};
