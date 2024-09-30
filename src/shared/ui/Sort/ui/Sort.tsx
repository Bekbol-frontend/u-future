import { clsx } from "@/shared/clsx";
import styles from "./Sort.module.scss";

interface IOption {
  value: string;
  text: string;
}

interface IProps {
  defaultText: string;
  options: IOption[];
  value: string;
  changeSort: (val: string) => void;
  addClass?: string;
}

function Sort(props: IProps) {
  const { defaultText, options, value, changeSort, addClass = "" } = props;

  return (
    <select
      value={value}
      onChange={(event) => changeSort(event.target.value)}
      className={clsx([styles.sort, addClass])}
    >
      <option value="" disabled>
        {defaultText}
      </option>
      {options.map((el) => (
        <option key={el.value} value={el.value}>
          {el.text}
        </option>
      ))}
    </select>
  );
}

export default Sort;
