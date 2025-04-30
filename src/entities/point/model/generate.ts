export const generateRandomPoint = (
    coordinates: [number, number],
    radiusInMeters: number
) => {
    const lat = parseFloat(String(coordinates[0]))
    const lon = parseFloat(String(coordinates[1]))

    console.log("GETTED TO GENERATERANDOMPOINT", coordinates, "radius in meter", radiusInMeters)

    const radiusInDeg = radiusInMeters / 111320; // Convert radius to degrees (approx. value in meters)

    const u = Math.random();
    const v = Math.random();
    const w = radiusInDeg * Math.sqrt(u);
    const t = 2 * Math.PI * v;
    const x = w * Math.cos(t);
    const y = w * Math.sin(t);

    const newLat = lat + x;
    const newLng = lon + y / Math.cos(lat * Math.PI / 180); // Adjust longitude based on latitude
    console.log("generated newLat, newLng", newLat, newLng)
    return [newLat, newLng];
};

