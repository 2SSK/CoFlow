// Importing component for displaying images
import Image from "next/image";

// Component to render when no search results are found
export const EmptySearch = () => {
    return (
        // Container for the empty search message
        <div className="h-full flex flex-col items-center justify-center">
            {/* Image indicating empty state */}
            <Image
                src="/empty-search.svg"
                height={140}
                width={140}
                alt="Empty"
            />
            {/* Title */}
            <h2 className="text-2xl font-semibold mt-6">No results found!</h2>
            {/* Description */}
            <p className="text-muted-foreground textg-sm mt-2">
                Try searching for something else
            </p>
        </div>
    );
};
