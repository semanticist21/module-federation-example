interface IncrementStore {
    count: number;
    increment: () => void;
}
export declare const useIncrementStore: import("zustand").UseBoundStore<import("zustand").StoreApi<IncrementStore>>;
export {};
