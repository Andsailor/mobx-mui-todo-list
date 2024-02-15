import { createContext } from "react";
import { IStore } from "../../types";

export const AppStoreContext = createContext<IStore | undefined>(undefined);
