interface IncrementStore {
    timestamp: number;
    count: number;
    increment: () => void;
}
export declare const useIncrementStore: import("zustand").UseBoundStore<import("zustand").StoreApi<IncrementStore>>;
export {};
