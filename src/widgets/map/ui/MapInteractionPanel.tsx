import React, { useState, useEffect } from 'react'
import { Map } from '@/entities/mapCanvas/ui/map'
import { HandlyLocatoinSearch } from '@/features/setManualLocation/ui/handlyLocatoinSearch'
import { fetchLocationsByQuery } from '@/features/setManualLocation'
import { RadiusSlider } from '@/features/changeRadiusGeneration'
import { GenerateButton } from '@/features/generatePoint'

//type Props = {}

export const MapInteractionPanel = (props: Props) => {
    const [radius, setRadius] = useState(1000)
    const [userGettedLocation, setUserGettedLocation] = useState([52, 52])
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
                fetchCoordinates={fetchLocationsByQuery}
                onLocationSelect={setUserGettedLocation}
            />

            <GenerateButton
                userGettedLocation={userGettedLocation}
                radius={radius}
                setPointLocation={setPointLocation}
            />
        </>

    )
}
