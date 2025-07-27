"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  type SetStateAction,
  type Dispatch,
} from "react";

type NavContextType = {
  showNavBar: boolean;
  setShowNavBar: Dispatch<SetStateAction<boolean>>;
};

const NavTheme = createContext<NavContextType | undefined>(undefined);

export const NavProvider = ({ children }: { children: ReactNode }) => {
  const [showNavBar, setShowNavBar] = useState(false);
  return (
    <NavTheme.Provider value={{ showNavBar, setShowNavBar }}>
      {children}
    </NavTheme.Provider>
  );
};

export const useNavContext = () => {
  const context = useContext(NavTheme);
  if (!context) throw new Error("useNavTheme must be within NavProvider");
  return context;
};
