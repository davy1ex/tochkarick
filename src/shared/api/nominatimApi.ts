import axios from "axios"

export const getLocationByQuery = async (query: string): Promise<[any]> => {
    try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/search?accept-language=ru&format=json&q=${query}`);
        return response.data

    } catch (error) {
        console.error('Error fetching location suggestions:', error);
    }
}

export const getStreetNameByCoordinates = async (coordinates: [number, number]): Promise<string> => {
    const latitude = coordinates[0]
    const longitude = coordinates[1]

    try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/search?accept-language=ru&format=json&q=${latitude},${longitude}`);
        return response.data[0].display_name;
    } catch (error) {
        console.error('Error fetching street name:', error);
        return '';
    }
};
