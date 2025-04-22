import React from "react";
import { generateRandomPoint } from '@/entities/point'
import { Point } from "@/entities/point/model/types";
import { getStreetByCoordinates } from "@/entities/point/api/getStreetByCoordinates";

const setPoint = () => {
    const point: Point = {
        id: 0,
        streetName: "Пушкина22",
        coordinates: null
    }
}

export const GenerateButton = ({
    coordinates,
    radius,
    setPoint
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
    }

    return (
        <button onClick={handleGeneratePoint}>
            Generate Random Point
        </ button>
    )
}