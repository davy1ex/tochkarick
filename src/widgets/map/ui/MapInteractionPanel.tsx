import React, { useState, useEffect } from 'react'
import { Map } from '@/entities/mapCanvas/ui/map'
import { HandlyLocatoinSearch } from '@/features/setManualLocation/ui/handlyLocatoinSearch'
import { RadiusSlider } from '@/features/changeRadiusGeneration'
import { GenerateButton } from '@/features/generatePoint'
import { CardPoint } from '@/entities/point'
import { addBookmark } from '@/features/bookmarkPoint'
import { Point } from '@/entities/point/model/types'
import { BookmarksPoint } from '@/features/bookmarkPoint/ui/BookmarksPoints'
import "./MapInteractionPanel.css"

//type Props = {}

export const MapInteractionPanel = () => {
    const [radius, setRadius] = useState(1000)
    const [centerLocation, setCenterLocation] = useState([52, 52])
    /* test purpose */
    const [point, setPoint] = useState<Point | null>({ coordinates: [42, 42] })
    const [showCardPoint, setShowCardPoint] = useState(false)
    const [showHandlyLocationSeach, setShowHandlyLocationSearch] = useState(false)
    /* test purpose */

    const handleCloseBookmark = () => {
        setPoint([0, 0])
        setShowCardPoint(false)
    }

    return (
        <div className='mapInteractionPanelWrapper'>
            <Map
                pointCoordinates={point.coordinates}
                showRadius={true}
                radius={radius}
                centerCoordinates={centerLocation}
            />

            {(point && showCardPoint)
                ? (
                    <>
                        <CardPoint
                            street={point.streetName}
                            index={"131534"}
                            handleBookmark={() => { addBookmark(point) }}
                            handleClose={handleCloseBookmark}
                        />

                        {/* <BookmarksPoint></BookmarksPoint> */}
                    </>
                )
                : (
                    <>

                        <RadiusSlider
                            radius={radius}
                            handleRadiusChange={setRadius}
                        />

                        <GenerateButton
                            coordinates={centerLocation}
                            radius={radius}
                            setPoint={setPoint}
                            onSetPoint={setShowCardPoint}
                        />

                        <HandlyLocatoinSearch
                            showHandlyLocationSeach={showHandlyLocationSeach}
                            onLocationSelect={setCenterLocation}
                            onClickShowHandlyLocationSeach={setShowHandlyLocationSearch}
                        />
                    </>
                )

            }


        </div>

    )
}
