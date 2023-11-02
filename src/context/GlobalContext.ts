import { SetStateAction, createContext } from "react";

// DEFINE GLOBAL STATE
export type TGlobalState = undefined;

export const GlobalContext = createContext<
  [TGlobalState, React.Dispatch<SetStateAction<TGlobalState>>] | null
>(null);
