"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useQuery } from "convex/react";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Hint } from "@/components/hint";
import { api } from "@/convex/_generated/api";
import { Actions } from "@/components/actions";
import { Button } from "@/components/ui/button";
import { Id } from "@/convex/_generated/dataModel";
import { useRenameModal } from "@/store/use-rename-modal";

interface InfoProps {
    boardId: string;
}

// Defining Poppins font with specific subsets and weight
const font = Poppins({
    subsets: ["latin"],
    weight: ["600"],
});

// Component for rendering a separator between tabs
const TabSeparator = () => {
    return <div className="text-neutral-300 px-1.5">|</div>;
};

// Info component displays information about the board
export const Info = ({ boardId }: InfoProps) => {
    const { onOpen } = useRenameModal();

    // Fetching data for the board using useQuery hook
    const data = useQuery(api.board.get, {
        id: boardId as Id<"boards">,
    });

    // Display skeleton while data is being fetched
    if (!data) return <InfoSkeleton />;

    return (
        <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
            <Hint label="Go to boards" side="bottom" sideOffset={10}>
                <Button asChild variant="board" className="px-2">
                    <Link href="/">
                        <Image
                            src="/logo.svg"
                            alt="Board logo"
                            height={40}
                            width={40}
                        />
                        <span
                            className={cn(
                                "font-semibold text-xl ml-2 text-black",
                                font.className
                            )}
                        >
                            CoFlow
                        </span>
                    </Link>
                </Button>
            </Hint>
            <TabSeparator />
            {/* Button to edit board title */}
            <Hint label="Edit title" side="bottom" sideOffset={10}>
                <Button
                    variant="board"
                    className="text-base font-normal px-2"
                    onClick={() => onOpen(data._id, data.title)}
                >
                    {data.title}
                </Button>
            </Hint>
            <TabSeparator />
            {/* Actions component for additional actions */}
            <Actions
                id={data._id}
                title={data.title}
                side="bottom"
                sideOffset={10}
            >
                <div>
                    <Hint label="Main menu" side="bottom" sideOffset={10}>
                        {/* Button for main menu with Menu icon */}
                        <Button size="icon" variant="board">
                            <Menu />
                        </Button>
                    </Hint>
                </div>
            </Actions>
        </div>
    );
};

// Skeleton component for displaying while data is being fetched
export const InfoSkeleton = () => {
    return (
        <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]" />
    );
};
