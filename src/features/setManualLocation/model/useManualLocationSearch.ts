import { useCallback, useEffect, useRef, useState } from "react"
import { Coordinates, LocationSuggestion } from "./types"
import { fetchLocationsByQuery } from "../api/fetchLocationsByQuery"
import { configFetchLocation } from "../api/fetchLocationsByQuery"

const DEBOUNCE_DELAY = 50;

export const useManualLocationSearch = (
    onLocationSelect: (coordinates: Coordinates) => void
) => {
    const [inputLocationValue, setInputLocationValue] = useState("")
    const [suggestions, setSuggestions] = useState<LocationSuggestion[] | null>(null)
    const debounceTimerRef = useRef<NodeJS.Timeout | null>(null)

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>()

    useEffect(() => {
        return () => {
            if (debounceTimerRef.current) {
                clearTimeout(debounceTimerRef.current)
            }
        }
    }, [])

    const fetchSuggestionsCallback = useCallback(async (query: string) => {
        setIsLoading(true);
        setError(null);

        try {
            const data = await fetchLocationsByQuery(query)
            setSuggestions(data)

            if (data === null) {
                setError("Failed load locations")
            }
        }

        catch {
            setSuggestions(null)
        }

        finally {
            setIsLoading(false)
        }
    }, [])

    const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputLocationValue(value);

        if (debounceTimerRef.current) {
            clearTimeout(debounceTimerRef.current);
        }

        if (value.trim() === '' || value.length < configFetchLocation.MIN_QUERY_LENGTH) { // Don't search if empty or too short
            setSuggestions([]); // Clear suggestions immediately
            setIsLoading(false);
            setError(null);
            return;
        }

        // Set isLoading true immediately for better UX while debouncing
        setIsLoading(true);
        debounceTimerRef.current = setTimeout(() => {
            fetchSuggestionsCallback(value);
        }, DEBOUNCE_DELAY);
    }, [fetchSuggestionsCallback]); // Include fetchSuggestionsCallback

    const handleClickSuggestion = (suggestion) => {
        const coordinates: Coordinates = [
            parseFloat(suggestion.lat),
            parseFloat(suggestion.lon)
        ]

        setSuggestions([])
        setIsLoading(false)
        onLocationSelect(coordinates)
    }



    const clearSuggestions = (setSuggestions) => {
        setSuggestions(null)
        setIsLoading(false)
        setError(null)
    }

    return {
        handleClickSuggestion,
        fetchSuggestionsCallback,
        clearSuggestions,
        handleInputChange,

        error,
        isLoading,
        suggestions,
        inputLocationValue
    }
}