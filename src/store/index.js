import { create } from "zustand";

export const useStore = create((set) => ({
    value: "hello world",
    setValue: () => set(() => ({ value: "new update"})),
    count: 0,
    incrementCount: () => set((state) => ({ count: state.count + 1 }))
}));

// example of setting up userStore for capstone project
export const userStore = create((set) => ({
    username: "",
    updateUsername: (usernameArgument) => set(() => ({ username: usernameArgument}))
}));