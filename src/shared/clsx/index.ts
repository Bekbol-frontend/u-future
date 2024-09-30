export type ClsxModsType = Record<string, boolean>;

export const clsx = (
  strArr: Array<string> = [],
  mods: ClsxModsType = {}
): string => {
  return [
    ...strArr,
    ...Object.entries(mods)
      .filter(([_, val]) => Boolean(val))
      .map(([key, _]) => key),
  ].join(" ");
};
