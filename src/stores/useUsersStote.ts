import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { User } from "../types/user";



type UsersState = {
  users: User[];
  addUser: (user: User) => void;
  removeUser: (email: string) => void;
  resetUsers: () => void;
};

const useUsersStore = create<UsersState>()(
  persist(
    (set) => ({
      users: [],
      addUser: (user: User) =>
        set((state) => ({
          users: [...state.users, user],
        })),
      removeUser: (email: string) =>
        set((state) => ({
          users: state.users.filter((u) => u.email !== email),
        })),
      resetUsers: () => set({ users: [] }),
    }),
    {
      name: "users-storage", 
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useUsersStore;
