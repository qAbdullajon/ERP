import * as React from "react";
import { create } from "zustand";

type TableStatusStore = {
  anchorEl: HTMLElement | null;
  open: boolean;
  onOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClose: () => void;
};

export const useAhamiyatStore = create<TableStatusStore>((set) => ({
  anchorEl: null,
  open: false,
  onOpen: (event) => set({ anchorEl: event.currentTarget, open: true }),
  onClose: () => set({ anchorEl: null, open: false })
}));

export const useStatustStore = create<TableStatusStore>((set) => ({
  anchorEl: null,
  open: false,
  onOpen: (event) => set({ anchorEl: event.currentTarget, open: true }),
  onClose: () => set({ anchorEl: null, open: false })
}));

export const useMenuStore = create<TableStatusStore>((set) => ({
  anchorEl: null,
  open: false,
  onOpen: (event) => set({ anchorEl: event.currentTarget, open: true }),
  onClose: () => set({ anchorEl: null, open: false })
}));