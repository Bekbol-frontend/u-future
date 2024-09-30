import { IConfig } from "../../types";

export const resolvers = (config: IConfig) => {
  const { paths } = config;

  return {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    alias: {
      "@": paths.srcAlias,
    },
  };
};
