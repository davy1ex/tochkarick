import { addPointToLocalStorage } from "@/shared/api/pointApi"
import { Point } from "@/entities/point/model/types"


export const addBookmark = async (point: Point): Promise<void> => {
    try {
        addPointToLocalStorage(point)
    }
    catch {
        // return "error add point" // todo write handler error
    }
}