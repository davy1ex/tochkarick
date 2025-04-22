import axios from "axios"

export const nominatimApi = async (query: string): Promise<[any]> => { // todo: change any to correct type
    try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/search?accept-language=ru&format=json&q=${query}`);
        return response.data

    } catch (error) {
        console.error('Error fetching location suggestions:', error);
    }
}