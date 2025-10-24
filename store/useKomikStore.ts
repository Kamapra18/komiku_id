import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface Komik {
  id: string;
  judul: string;
  deskripsi: string;
  volume: string;
  status: "Tersedia" | "Dipinjam";
}

interface KomikStore {
  komiks: Komik[];
  addKomik: (komik: Omit<Komik, "id" | "status">) => void;
  removeKomik: (id: string) => void;
  toggleStatus: (id: string) => void;
  updateKomik: (id: string, updatedData: Partial<Komik>) => void;
}

export const useKomikStore = create<KomikStore>()(
  persist(
    (set) => ({
      komiks: [],

      addKomik: (komik) =>
        set((state) => ({
          komiks: [
            ...state.komiks,
            { id: Date.now().toString(), ...komik, status: "Tersedia" },
          ],
        })),

      removeKomik: (id) =>
        set((state) => ({
          komiks: state.komiks.filter((k) => k.id !== id),
        })),

      toggleStatus: (id) =>
        set((state) => ({
          komiks: state.komiks.map((k) =>
            k.id === id
              ? {
                  ...k,
                  status: k.status === "Tersedia" ? "Dipinjam" : "Tersedia",
                }
              : k
          ),
        })),

      updateKomik: (id, updatedData) =>
        set((state) => ({
          komiks: state.komiks.map((k) =>
            k.id === id ? { ...k, ...updatedData } : k
          ),
        })),
    }),
    {
      name: "komik-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
