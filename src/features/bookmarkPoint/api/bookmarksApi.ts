import { pushToLocalStorage, readAllFromLocalStorage } from "@/shared/api/localStorage"
import { Point } from "@/entities/point/model/types"

const KEY_BOOKMARK = "bookmarks"

export const addBookmark = async (point: Point): Promise<void> => {
    try {
        pushToLocalStorage(KEY_BOOKMARK, point)
    }
    catch {
        // return "error add point" // todo write handler error
    }
}

export const getAllBookmarks = async (): Promise<Point[]> => {
    try {
        return await readAllFromLocalStorage(KEY_BOOKMARK)
    }
    catch {
        // return "error add point" // todo write handler error
    }
}