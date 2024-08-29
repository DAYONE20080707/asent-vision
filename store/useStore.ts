import { create } from "zustand"
import { persist } from "zustand/middleware"

interface StoreState {
  selectedSections: Record<string, string>
  selectSection: (section: string, value: string) => void
}

// ローカルストレージを使用したストレージ設定
const localStorageStore = {
  getItem: (name: string) => {
    const storedValue = localStorage.getItem(name)
    if (!storedValue) return null
    try {
      return JSON.parse(storedValue)
    } catch {
      return null
    }
  },
  setItem: (name: string, value: any) => {
    localStorage.setItem(name, JSON.stringify(value))
  },
  removeItem: (name: string) => {
    localStorage.removeItem(name)
  },
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      selectedSections: {},
      selectSection: (section, value) =>
        set((state) => ({
          selectedSections: {
            ...state.selectedSections,
            [section]: value,
          },
        })),
    }),
    {
      name: "website-system-storage",
      storage: localStorageStore,
    }
  )
)
