import { useState } from "react";
import { GlobalContext, TGlobalState } from "@/context/GlobalContext";

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [gState, setGState] = useState<TGlobalState>();

  return (
    <GlobalContext.Provider value={[gState, setGState]}>
      {children}
    </GlobalContext.Provider>
  );
};
