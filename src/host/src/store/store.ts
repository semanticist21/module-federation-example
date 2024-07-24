import { create } from "zustand";

interface IncrementStore {
  timestamp: number;
  count: number;
  increment: () => void;
}

export const useIncrementStore = create<IncrementStore>((set) => ({
  timestamp: Date.now(),
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
