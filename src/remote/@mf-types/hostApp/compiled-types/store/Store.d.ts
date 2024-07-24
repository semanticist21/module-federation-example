interface IncrementStore {
    count: number;
    increment: () => void;
}
export declare const useIncrementStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<IncrementStore>, "persist"> & {
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<IncrementStore, IncrementStore>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void> | void;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: IncrementStore) => void) => () => void;
        onFinishHydration: (fn: (state: IncrementStore) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<IncrementStore, IncrementStore>>;
    };
}>;
export {};
