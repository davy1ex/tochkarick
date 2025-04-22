import React, { useState, useEffect } from 'react'
import { Map } from '@/entities/mapCanvas/ui/map'
import { HandlyLocatoinSearch } from '@/features/setManualLocation/ui/handlyLocatoinSearch'
import { RadiusSlider } from '@/features/changeRadiusGeneration'
import { GenerateButton } from '@/features/generatePoint'
import { CardPoint } from '@/entities/point'
import { addBookmark } from '@/features/bookmarkPoint'
import { Point } from '@/entities/point/model/types'
import { BookmarksPoint } from '@/features/bookmarkPoint/ui/BookmarksPoints'

//type Props = {}

export const MapInteractionPanel = () => {
    const [radius, setRadius] = useState(1000)
    const [centerLocation, setCenterLocation] = useState([52, 52])
    /* test purpose */
    const [point, setPoint] = useState<Point | null>({ coordinates: [42, 42] })
    /* test purpose */

    return (
        <>
            <Map
                pointCoordinates={point.coordinates}
                showRadius={true}
                radius={radius}
                centerCoordinates={centerLocation}
            />

            <RadiusSlider
                radius={radius}
                handleRadiusChange={setRadius}
            />
            <HandlyLocatoinSearch
                onLocationSelect={setCenterLocation}
            />

            <GenerateButton
                coordinates={centerLocation}
                radius={radius}
                setPoint={setPoint}
            />

            {point && (
                <>
                    <CardPoint
                        street={point.streetName}
                        index={"131534"}
                        handleBookmark={() => { addBookmark(point) }}
                        handleClose={() => setPoint(null)}
                    />

                    <BookmarksPoint></BookmarksPoint>
                </>
            )}


        </>

    )
}
