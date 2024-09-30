import { AppContext } from "@/app/Providers/Context/config";
import { useContext } from "react";

export const useAppContext = () => {
  return useContext(AppContext);
};
