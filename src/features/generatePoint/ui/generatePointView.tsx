import React, { useState, useEffect } from 'react'
import { Map } from './map/map'
import HandlyLocatoinSearch from './handlyPositionSearch'
import { fetchCoordinates } from '../api/fetchCoordinates'
import { RadiusSlider } from './radiusSlider/radiusSlider'
import { generateRandomPoint } from '../api/generateRandomPoint'

type Props = {}

export const GeneratePointView = (props: Props) => {
  const [radius, setRadius] = useState(1000)
  const [userGettedLocation, setUserGettedLocation] = useState([52, 52])
  const [pointLocation, setPointLocation] = useState<[number, number] | null>(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserGettedLocation([position.coords.latitude, position.coords.longitude]);
    });
  }, [])

  return (
    <>

        <Map 
          pointCoordinates={pointLocation}
          showRadius={true}
          radius={radius}
          centerCoordinates={userGettedLocation}
        />

        <RadiusSlider 
          radius={radius}
          handleRadiusChange={setRadius} 
        />
        <HandlyLocatoinSearch 
          fetchCoordinates={fetchCoordinates} 
          onHandlySelectLocation={setUserGettedLocation}
        />

        <button onClick={() => 
          setPointLocation(generateRandomPoint(userGettedLocation, radius))} 
        >
            Generate Random Point
        </button>
    </>

  )
}
