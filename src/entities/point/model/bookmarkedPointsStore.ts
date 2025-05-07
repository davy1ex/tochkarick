import { create } from "zustand";

export const useBookmarksStore = create(((set) => ({
    bookmarks: [{ streetName: "bla-bla" }],
    addBookmark: (point) => set((state) => ({ bookmarks: [...state.bookmarks, point] }))
})))