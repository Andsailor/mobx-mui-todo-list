import { ReactNode } from "react";
import { AppStoreContext } from "./AppContext";
import AppStore from "../AppStore";

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AppStoreContext.Provider value={new AppStore()}>
      {children}
    </AppStoreContext.Provider>
  );
};
