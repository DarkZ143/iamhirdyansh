"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";

type LoaderContextType = {
  loading: boolean;
  showLoader: (ms?: number) => void;
};

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export function LoaderProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);

  // function to trigger loader manually
  const showLoader = useCallback((ms = 2000) => {
    setLoading(true);
    setTimeout(() => setLoading(false), ms);
  }, []);

  return (
    <LoaderContext.Provider value={{ loading, showLoader }}>
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoader() {
  const ctx = useContext(LoaderContext);
  if (!ctx) throw new Error("useLoader must be used inside LoaderProvider");
  return ctx;
}
