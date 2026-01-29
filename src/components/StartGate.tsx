"use client";

import { createContext, useContext, useState } from "react";

type StartGateProps = {
  children: React.ReactNode;
};

type StartContextValue = {
  started: boolean;
};

const StartContext = createContext<StartContextValue>({ started: false });

export function useStart() {
  return useContext(StartContext);
}

export default function StartGate({ children }: StartGateProps) {
  const [started, setStarted] = useState(false);

  return (
    <StartContext.Provider value={{ started }}>
      <div className="relative">
        {started ? null : (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
            <button
              type="button"
              className="rounded-full border-2 border-ink bg-yellow px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em]"
              onClick={() => setStarted(true)}
            >
              Start?
            </button>
          </div>
        )}
        {children}
      </div>
    </StartContext.Provider>
  );
}
