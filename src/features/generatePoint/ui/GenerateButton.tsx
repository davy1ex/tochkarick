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
        if (newCoordinates.length < 2) return
        const streetName = await getStreetByCoordinates({coordinates: newCoordinates})
        console.log("street is", streetName)

        setPoint({
            id: 0,
            streetName: streetName,
            coordinates: newCoordinates
        })
        onSetPoint(true)
    }

    return (
        <button onClick={handleGeneratePoint}>
            Generate Random Point
        </ button>
    )
}