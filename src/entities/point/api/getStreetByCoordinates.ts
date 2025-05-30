import { getStreetNameByCoordinates } from "@/shared/api/nominatimApi"

type GetStreetByCoordinatesProps = {
    coordinates: [number, number]
}

export const getStreetByCoordinates = async ({coordinates}: GetStreetByCoordinatesProps) => {
    if (coordinates.length < 2) return null

    try {
        return await getStreetNameByCoordinates(coordinates)
    }
    catch {
        // todo write error handler
    }
}