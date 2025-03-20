import React, { useState } from "react"
import {SuggestionList} from "./suggestionList"
import { HandlyLocatoinSearchInput } from "./handlyLocationSearchInput"
import { fetchCoordinates } from "@features/generatePoint/api/fetchCoordinates"

const handlyLocationSearch = ({setUserGettedLocation}) => {
    const [suggestions, setSuggestion] = useState([])

    return (
        <>
            <HandlyLocatoinSearchInput 
                setSuggestion={setSuggestion} 
                fetchCoordinates={fetchCoordinates}
            />

            <SuggestionList
                suggestions={suggestions}
                onHandlySelectLocation={setUserGettedLocation}
            />
        </>
    )
}


export default handlyLocationSearch