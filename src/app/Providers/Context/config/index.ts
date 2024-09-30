import { createContext } from "react";
import { IContextValue } from "./types";

export const AppContext = createContext<IContextValue>(null!);
