import { List } from "./list";
import { NewButton } from "./new-button";

// Sidebar component responsible for displaying a fixed sidebar navigation
export const Sidebar = () => {
    // Rendering the sidebar with a fixed position, background color, and vertical layout
    return (
        <aside className="fixed z-[1] left-0 bg-blue-950 h-full w-[60px] flex p-3 flex-col gap-y-4 text-white">
            {/* Rendering the list component */}
            <List />
            {/* Rendering the new button component */}
            <NewButton />
        </aside>
    );
};
