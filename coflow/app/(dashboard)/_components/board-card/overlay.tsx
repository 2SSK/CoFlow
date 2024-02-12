// Overlay component for adding visual effects on hover
export const Overlay = () => {
    return (
        // Rendering a semi-transparent black overlay that becomes visible on hover
        <div className="opacity-0 group-hover:opacity-50 transition-opacity h-full w-full bg-black" />
    );
};
