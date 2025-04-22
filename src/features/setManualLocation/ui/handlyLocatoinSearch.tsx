import React from "react"
import { useManualLocationSearch } from "../model/useManualLocationSearch"
import { fetchLocationsByQuery } from '@/features/setManualLocation'


export const HandlyLocatoinSearch = ({
    fetchCoordinates,
    onLocationSelect,

}: {
    fetchCoordinates: (location: string) => Promise<[]>
    onLocationSelect: any
}) => {
    const {
        inputLocationValue,
        suggestions,
        isLoading,
        error, // Get error state from hook
        handleInputChange,
        handleClickSuggestion,
    } = useManualLocationSearch(onLocationSelect)

    return (
        <>
            <input
                type="text"
                value={inputLocationValue}
                onChange={
                    (e) => { handleInputChange(e) }
                }
            />

            {isLoading && <div className="loading-indicator">Loading...</div>}
            {error && <div className="error-message">{error}</div>} {/* todo separate suggestion to separate ui element */}

            {!isLoading && !error && suggestions && suggestions.length > 0 && (
                <ul id="location-suggestions" className="suggestions-list">
                    {suggestions.map((location) => (
                        <li
                            key={location.place_id}
                            onClick={() => handleClickSuggestion(location)}
                            className="suggestion-item" // Add specific class
                            role="option"
                            aria-selected="false" // Manage aria-selected if adding keyboard nav
                        >
                            {location.display_name}
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}
