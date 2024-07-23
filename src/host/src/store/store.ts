import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IncrementStore {
  count: number;
  increment: () => void;
}

export const useIncrementStore = create(
  persist<IncrementStore>(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
    }),
    {
      name: "increment-store",
    }
  )
);
