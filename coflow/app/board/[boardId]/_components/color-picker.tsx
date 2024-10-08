"use client";

import { Color } from "@/types/canvas";
import { colorToCss } from "@/lib/utils";

// Props interface for ColorPicker component
interface ColorPickerProps {
    onChange: (color: Color) => void;  // Callback function for handling color change
}

// ColorPicker component for selecting colors
export const ColorPicker = ({ onChange }: ColorPickerProps) => {
    return (
        // Container for color buttons
        <div className="flex flex-wrap gap-2 items-center max-w-[164px] pr-2 mr-2 border-r border-neutral-200">
            {/* Color buttons */}
            <ColorButton color={{ r: 243, g: 82, b: 35 }} onClick={onChange} />
            <ColorButton
                color={{ r: 255, g: 249, b: 177 }}
                onClick={onChange}
            />
            <ColorButton color={{ r: 68, g: 202, b: 99 }} onClick={onChange} />
            <ColorButton color={{ r: 39, g: 142, b: 237 }} onClick={onChange} />
            <ColorButton
                color={{ r: 155, g: 105, b: 245 }}
                onClick={onChange}
            />
            <ColorButton color={{ r: 252, g: 142, b: 42 }} onClick={onChange} />
            <ColorButton color={{ r: 0, g: 0, b: 0 }} onClick={onChange} />
            <ColorButton
                color={{ r: 255, g: 255, b: 255 }}
                onClick={onChange}
            />
        </div>
    );
};

// Props interface for ColorButton component
interface ColorButtonProps {
    onClick: (color: Color) => void;
    color: Color;
}

// ColorButton component representing a single color button
const ColorButton = ({ onClick, color }: ColorButtonProps) => {
    return (
        // Button for selecting the color
        <button
            className="w-8 h-8 items-center flex justify-center hover:opacity-75 transition"
            onClick={() => onClick(color)}  // Call the onChange callback with the selected color
        >
            {/* Color indicator */}
            <div
                className="h-8 w-8 rounded-md border border-neutral-300"
                style={{ background: colorToCss(color) }}  // Apply background color based on the selected color
            />
        </button>
    );
};
