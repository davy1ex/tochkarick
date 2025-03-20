import React from "react"

export const SuggestionList = ({
    suggestions,
    onHandlySelectLocation
}: {
    suggestions: Array,
    onHandlySelectLocation: any
}) => {    
    const onClickSuggestion = (location: any) => {
        console.log([parseInt(location.lat), parseInt(location.lon)]); 
        onHandlySelectLocation([parseFloat(location.lat), parseFloat(location.lon)])
    }

    return (
        <>
        {
            suggestions ? 
                suggestions.map((location) => (
                    <p onClick={() => {onClickSuggestion(location)}} > {location["display_name"]}  </p>
                ))
            : ""
        }
        </>
    )
}