import { nominatimApi } from "@/shared/api/nominatimApi";
import { LocationSuggestion } from "../model/types";

export const configFetchLocation = {
    MIN_QUERY_LENGTH: 3,
    MAX_SUGGESTIONS: 5
}

export const fetchLocationsByQuery = async (query: string, slice: number = 3): Promise<LocationSuggestion[] | null> => {
    if (query.length < configFetchLocation.MIN_QUERY_LENGTH) return []

    try {
        const responseCoordinates = await nominatimApi(query)
        const limitedSuggestions = responseCoordinates.slice(0, configFetchLocation.MAX_SUGGESTIONS);

        /* 
            DEBUG
        */
        console.log("getted from API response of coords", responseCoordinates)
        console.log("getted from API response of limitedSuggestions", limitedSuggestions)
        /* 
            DEBUG
        */
        return limitedSuggestions
    }
    catch {
        return null
        // todo error message
    }
}