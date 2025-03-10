import { create } from 'zustand'

type ColumnsEditStore = {
	isOpen: boolean
	onOpen: () => void
	onClose: () => void
}

export const useColumnsEdit = create<ColumnsEditStore>(set => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}))