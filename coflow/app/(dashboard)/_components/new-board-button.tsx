"use client";

// Importing necessary dependencies and component
import { toast } from "sonner";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";

// Interface for props of the NewBoardButton component
interface NewBoardButtonProps {
    orgId: string;
    disabled?: boolean;
}

// Component for rendering "New Board" button
export const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
    // Initializing router for page navigation
    const router = useRouter();
    // Initializing useApiMutation hook for handling API mutations
    const { mutate, pending } = useApiMutation(api.board.create);

    // Function to handle click event on the button
    const onClick = () => {
        // Calling the API to create a new board
        mutate({
            orgId,
            title: "Untitled",  // Default title for the new board
        })
            .then((id) => {
                // If the board is successfully created, show success toast and navigate to the new board
                toast.success("Board created");
                router.push(`/board/${id}`);
            })
            .catch(() => toast.error("Failed to create board"));    // If there's an error while creating the board, show error toast
    };

    // Rendering the button element
    return (
        <button
            disabled={pending || disabled}
            onClick={onClick}
            className={cn(
                "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6",
                (pending || disabled) &&
                    "opacity-75 hover:bg-blue-600 cursor-not-allowed"
            )}
        >
            <div />
            <Plus className="h-12 w-12 text-white stroke-1" />
            <p className="text-sm text-white font-light">New board</p>
        </button>
    );
};
