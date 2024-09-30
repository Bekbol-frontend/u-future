import { CSSProperties, memo, useMemo } from "react";
import styles from "./Skeleton.module.scss";
import { clsx } from "@/shared/clsx";

interface IProps {
  style?: CSSProperties;
  addClass?: string;
}

function Skeleton(props: IProps) {
  const { style, addClass = "" } = props;

  const styleSkeleton = useMemo<CSSProperties>(() => ({ ...style }), [style]);

  return (
    <div style={styleSkeleton} className={clsx([styles.skeleton, addClass])} />
  );
}

export default memo(Skeleton);
