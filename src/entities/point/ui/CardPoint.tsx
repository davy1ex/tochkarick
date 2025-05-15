import "./CardPoint.css"
import { Point } from "../model/types"

interface CardPointProps {
    street: string;
    coordinates: [number, number];
    handleBookmark: () => void;
    handleClose: () => void;
}

export const CardPoint = ({ street, coordinates, handleBookmark, handleClose }: CardPointProps) => {
    const handleStartJourney = () => {
        if (!coordinates || coordinates.length !== 2) {
            console.error('Invalid coordinates');
            return;
        }
        
        const [lat, lng] = coordinates;
        // Using coordinates for direct navigation in Google Maps
        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
        window.open(googleMapsUrl, '_blank');
    };

    return (
        <div className="cardPointWrapper">
            <div className="textContainer">
                <div className="textAboutPoint">
                    <h1>Point Generated!</h1>
                    <div className="buttonBookmark" onClick={handleBookmark}>
                        🔖
                    </div>
                </div>
                <p>{street}</p>
                {coordinates && (
                    <p>Coordinates: {coordinates[0].toFixed(6)}, {coordinates[1].toFixed(6)}</p>
                )}
            </div>

            <div className="buttonClose">
                <button onClick={handleStartJourney}>Start Journey</button>
            </div>
            <div className="buttonClose">
                <button>Create report</button>
            </div>
            <div className="buttonClose">
                <button onClick={handleClose}>Close</button>
            </div>
        </div>
    )
}