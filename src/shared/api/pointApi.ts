interface Point {
    streetName: string,
    coordinates: [number, number]
}

const POINT_KEY = "points"

/*
points = [
    {
        id: 1,
        streenName: "bla-bla-bla",
        coordinates: [42, 42]
    }
]
*/

export const addPointToLocalStorage = async (point: Point) => {
    console.log("received point", point)

    return new Promise((resolve) => {
        setTimeout(() => {
            const points = getAllLoaclStoragePoint()
            if (points) {
                points.push(point)
                localStorage.setItem(POINT_KEY, JSON.stringify(points))
            }

            else {
                localStorage.setItem(POINT_KEY, JSON.stringify([{ point }]))
            }
            resolve({ "status": "success" })

        }, 1000)
    })


}

export const getAllLoaclStoragePoint = (): Point[] => {
    return JSON.parse(localStorage.getItem(POINT_KEY))
}

