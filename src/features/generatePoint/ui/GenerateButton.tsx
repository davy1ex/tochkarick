import React from "react";
import { generateRandomPoint } from '@/entities/location'

export const GenerateButton = ({
    userGettedLocation,
    radius,
    setPointLocation
}) => {
    return (
        <button onClick={() =>
            setPointLocation(generateRandomPoint(userGettedLocation, radius))}
        >
            Generate Random Point
        </button>
    )
}