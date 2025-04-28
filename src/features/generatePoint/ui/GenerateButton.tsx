import React from "react";
import { generateRandomPoint } from '@/entities/point'
import { Point } from "@/entities/point/model/types";
import { getStreetByCoordinates } from "@/entities/point/api/getStreetByCoordinates";

export const GenerateButton = ({
    coordinates,
    radius,
    setPoint,
    onSetPoint,
}) => {
    const handleGeneratePoint = async () => {
        const newCoordinates = generateRandomPoint(coordinates, radius)
        const streetName = await getStreetByCoordinates(coordinates)
        console.log("street is", streetName)

        setPoint({
            id: 0,
            streetName: streetName,
            coordinates: coordinates
        })
        onSetPoint(true)
    }

    return (
        <button onClick={handleGeneratePoint}>
            Generate Random Point
        </ button>
    )
}