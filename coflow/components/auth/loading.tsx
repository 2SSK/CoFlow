// Import the Image from the "next/images" module
import Image from "next/image";

// Decline a Loading component
export const Loading = () => {
    return (
        // Container div with flex layout to center the content vertically and horizontally
        <div className="h-full w-full flex flex-col  justify-center items-center">
            {/* Image component for displaying the logo */}
            <Image
                src="public\logo.svg"
                alt="Logo"
                width={120}
                height={120}
                className="animate-pulse duration-700"
            />
        </div>
    );
};
