// Importing necessary dependencies and components
import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

// Interface for defining the props accepted by the Footer component
interface FooterProps {
    title: string;
    authorLabel: string;
    createdAtLabel: string;
    isFavorite: boolean;
    onClick: () => void;
    disabled: boolean;
}

// Footer component for rendering additional details and favorite button for an item
export const Footer = ({
    title,
    authorLabel,
    createdAtLabel,
    isFavorite,
    onClick,
    disabled,
}: FooterProps) => {
    const handleClick = (
        // Event handler for clicking the favorite button
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.stopPropagation();
        event.preventDefault();

        onClick();
    };

    // Rendering the Footer component
    return (
        <div className="relative bg-white p-3">
            <p className="text-[13px] truncate max-w-[calc(100%-20px)]">
                {title}
            </p>
            <p className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-muted-foreground truncate">
                {authorLabel}, {createdAtLabel}
            </p>
            <button
                disabled={disabled}
                onClick={handleClick}
                className={cn(
                    "opacity-0 group-hover:opacity-100 transition absolute top-3 right-3 text-muted-foreground hover:text-blue-600",
                    disabled && "cursor-not-allowed opacity-75"
                )}
            >
                {/* Star icon for indicating favorite status */}
                <Star
                    className={cn(
                        "h-4 w-4",
                        isFavorite && "fill-blue-600 text-blue-600"
                    )}
                />
            </button>
        </div>
    );
};
