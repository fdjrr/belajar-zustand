import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const init = (set) => ({
  count: 1,
  increment: () =>
    set((state) => ({
      count: state.count + 1,
    })),
  decrement: () =>
    set((state) => ({
      count: state.count - 1,
    })),

  username: "fadjrir",
  updateUsername: (username) => set({ username }),

  user: {},
  getUser: async (username) => {
    const req = await fetch(`https://api.github.com/users/${username}`);

    if (req.ok) {
      const user = await req.json();

      set({ user });
    }
  },
  logoutUser: () => set({ user: {} }),
});

export const useAppStore = create(
  persist(init, {
    name: "app-store",
    storage: createJSONStorage(() => sessionStorage),
  })
);
