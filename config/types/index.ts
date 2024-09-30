export interface IPaths {
  entry: string;
  output: string;
  html: string;
  devServer: string;
  srcAlias: string;
  favicon: string;
}

export type TYPE_MODE = "development" | "production";

export interface IEnv {
  port: number;
  mode: TYPE_MODE;
}

export interface IConfig {
  paths: IPaths;
  mode: TYPE_MODE;
  port: number;
  isDev: boolean;
  isProd: boolean;
}
