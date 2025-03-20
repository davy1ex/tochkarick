import React, { useState, useEffect } from 'react'
import { Map } from './map'
import { HandlyLocatoinSearch } from './handlyLocatoinSearch'
import { fetchCoordinates } from '../api/fetchCoordinates'
import {RadiusSlider} from './radiusSlider/radiusSlider'
import { generateRandomPoint } from '../api/generateRandomPoint'

type Props = {}

export const GeneratePointView = (props: Props) => {
  const [radius, setRadius] = useState(1000)
  const [userGettedLocation, setUserGettedLocation] = useState([52,52])
  const [pointLocation, setPointLocation] = useState<[number, number] | null>(null)

  useEffect(() => {
    console.log("pointLocation changed", pointLocation)
    console.log("userGettedLocation changed", userGettedLocation)
  }, [pointLocation, userGettedLocation])

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
