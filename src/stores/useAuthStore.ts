import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { User } from "../types/user";

type UserState = {
  userData: User;
  setUser: (user: User) => void;
  resetUserData: () => void;
};

const useAuthStore = create<UserState>()(
  persist(
    (set) => ({
      userData: {
        email: undefined,
        firstName: undefined,
        lastName: undefined,
      },
      setUser: (user) =>
        set((state) => ({ userData: { ...state.userData, ...user } })),
      resetUserData: () =>
        set({ userData: { email: undefined, firstName: undefined, lastName: undefined } }),
    }),
    {
      name: "user-storage", 
      storage: createJSONStorage(() => sessionStorage), 
    }
  )
);

export default useAuthStore;

