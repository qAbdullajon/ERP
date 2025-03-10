import * as React from "react";
import { create } from "zustand";

type TableHududStore = {
  anchorEl: HTMLElement | null;
  open: boolean;
  onOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClose: () => void;
};

export const useAddMadal = create<TableHududStore>((set) => ({
  anchorEl: null,
  open: false,
  onOpen: (event) => set({ anchorEl: event.currentTarget, open: true }),
  onClose: () => set({ anchorEl: null, open: false }),
}));
