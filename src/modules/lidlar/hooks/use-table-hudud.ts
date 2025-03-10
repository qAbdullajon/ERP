import * as React from "react";
import { create } from "zustand";

type TableHududStore = {
  anchorEl: HTMLElement | null;
  open: boolean;
  status: string[]; 
  onOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClose: () => void;
  addStatus: (status: string) => void;
  removeStatus: (status: string) => void;
};

export const useTableHudud = create<TableHududStore>((set) => ({
  anchorEl: null,
  open: false,
  status: [], 
  onOpen: (event) => set({ anchorEl: event.currentTarget, open: true }),
  onClose: () => set({ anchorEl: null, open: false }),
  addStatus: (status) =>
    set((state) => ({ status: [...state.status, status] })), 
  removeStatus: (status) =>
    set((state) => ({
      status: state.status.filter((s) => s !== status), 
    })),
}));
