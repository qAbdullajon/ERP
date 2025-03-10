import { create } from "zustand";

type StatusModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  userId: string;
  setUserId: (id: string) => void;
  status: string
  setStatus: (status:string) => void
};

export const useStatusModal = create<StatusModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  userId: "",
  setUserId: (id) => set({ userId: id }),
  status: "",
  setStatus: (s) => set({status: s})
}));
