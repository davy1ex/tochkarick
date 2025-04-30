import React from 'react';
import './RadiusSlider.css';

interface RadiusSliderProps {
    radius: number;
    handleRadiusChange: (radius: number) => void;
}

export const RadiusSlider: React.FC<RadiusSliderProps> = ({ radius, handleRadiusChange }) => {
    return (
        <div className="slider-container">
            <input
                type="range"
                min="100"
                max="5000"
                value={radius}
                onChange={(e) => handleRadiusChange(Number(e.target.value))}
                className="slider"
            />
            <div className={"slider-component"}>{radius} meters</div>
        </div>
    )
}