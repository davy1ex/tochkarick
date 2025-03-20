import axios from "axios"

export const fetchCoordinates = async (query: string) => {
    try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/search?accept-language=ru&format=json&q=${query}`);

        const limitedSuggestions = response.data.slice(0, 3);
        
        return limitedSuggestions

    } catch (error) {
        console.error('Error fetching location suggestions:', error);
    }
}