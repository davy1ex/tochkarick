import { getAllLoaclStoragePoint } from "@/shared/api/pointApi"
import { Point } from "@/entities/point/model/types"


export const getAllBookmarks = async (): Point[] => {
    try {
        return await getAllLoaclStoragePoint()
    }
    catch {
        // return "error add point" // todo write handler error
    }
}