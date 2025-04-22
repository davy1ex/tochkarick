export interface LocationSuggestion {
    place_id,
    latitude: string;
    longitude: string;
    display_name: string
}

export type Coordinates = [number, number]