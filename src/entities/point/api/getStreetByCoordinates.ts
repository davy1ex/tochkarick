import { getStreetNameByCoordinates } from "@/shared/api/nominatimApi"

export const getStreetByCoordinates = async (coordinates: [number, number]) => {
    if (coordinates.length < 2) return null

    try {
        return await getStreetNameByCoordinates(coordinates)
    }
    catch {
        // todo write error handler
    }
}