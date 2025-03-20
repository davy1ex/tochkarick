import React, { useState } from "react"

export const HandlyLocatoinSearchInput = ({
  fetchCoordinates,
  setSuggestion,
}: {
  setSuggestion: any,
  fetchCoordinates: (location: string) => Promise<[]>
}) => {
  const [inputLocation, setInputLocation] = useState<string>("")
  const [debounceTimer, setDebounceTimer] = useState(null)

  const handleChangeInputLocation = (e: any) => {
    setInputLocation(e.target.value)

    if (debounceTimer) clearTimeout(debounceTimer)
    const newTimer = setTimeout(() => {
      fetchCoordinates(e.target.value)
        .then((data) => {
          setSuggestion(data)
        })

    }, 1000)

    setDebounceTimer(newTimer)
  }



  return (
    <>
      <input
        type="text"
        value={inputLocation}
        onChange={
          (e) => { handleChangeInputLocation(e) }
        }
      />
    </>
  )
}
