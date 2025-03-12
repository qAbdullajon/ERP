import { create } from "zustand";

type StatusModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useHabarYuborish = create<StatusModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
