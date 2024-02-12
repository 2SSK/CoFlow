"use client";

// Importing necessary dependencies and components
import Image from "next/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useOrganization } from "@clerk/nextjs";

import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { useApiMutation } from "@/hooks/use-api-mutation";

// Component to render when no boards are found
export const EmptyBoards = () => {
    const router = useRouter();
    const { organization } = useOrganization();
    const { mutate, pending } = useApiMutation(api.board.create);

    // Handler function for creating a new board
    const onClick = () => {
        // If organization information is not available, do nothing
        if (!organization) return;

        // Mutation to create a new board
        mutate({
            orgId: organization.id,
            title: "Untitled",
        })
            .then((id) => {
                // If mutation is successful
                toast.success("Board created"); // Display success toast
                router.push(`/board/${id}`); // Redirect to the newly created board
            })
            .catch(() => toast.error("Failed to create board")); // If mutation fails, display error toast
    };

    // Rendering the empty boards message
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image src="/note.svg" height={110} width={110} alt="Empty" />
            <h2 className="text-2xl font-semibold mt-6">
                Create your first board!
            </h2>
            <p className="text-muted-foreground textg-sm mt-2">
                Start by creating a board for your organization
            </p>
            <div className="mt-6">
                <Button disabled={pending} onClick={onClick} size="lg">
                    Create board
                </Button>
            </div>
        </div>
    );
};
