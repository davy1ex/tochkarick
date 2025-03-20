import React, { useState } from "react"

export const HandlyLocatoinSearch = ({
    fetchCoordinates,
    onHandlySelectLocation,

} : {
    fetchCoordinates: (location: string) => Promise<[]>
    onHandlySelectLocation: any
}) => {
    const [inputLocation, setInputLocation] = useState("")
    const [suggestion, setSuggestion] = useState<[] | null>(null)
    const [debounceTimer, setDebounceTimer] = useState<Node.timeout | null>(null)

    const handleChangeInputLocation = (e) => {
        setInputLocation(e.target.value)

        if (debounceTimer) clearTimeout(debounceTimer)
        const newTimer = setTimeout(() => {
            fetchCoordinates(e.target.value)
                .then((data) => {
                    setSuggestion(data)
                })
            
        }, 1000)
    }

    const = onClickSuggestion = () => {
        console.log([parseInt(location.lat), parseInt(location.lon)]); 
        onHandlySelectLocation([parseFloat(location.lat), parseFloat(location.lon)])}}


    }

    return (
        <>
            <input 
                type="text" 
                value={inputLocation} 
                onChange={
                    (e)=>{handleChangeInputLocation(e)}  
                }/>

                {
                    suggestion ? 
                        suggestion.map((location) => (
                            <p onClick={() => {onClickSuggestion(location)} > { {location["display_name"]}  </p>
                        ))
                    : ""
                }
        </>
    )
}
