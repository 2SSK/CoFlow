"use client";

import Image from "next/image";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Hint } from "@/components/hint";

interface ItemProps {
    id: string;
    name: string;
    imageUrl: string;
}

// Item component represents an organization item in the organization list
export const Item = ({ id, name, imageUrl }: ItemProps) => {
    // Getting the active organization and organization list context from Clerk
    const { organization } = useOrganization();
    const { setActive } = useOrganizationList();

    // Checking if this organization is active
    const isActive = organization?.id === id;

    // Function to handle click event to set the organization active
    const onClick = () => {
        // If setActive function is not available, return
        if (!setActive) return;

        // Set the clicked organization as active
        setActive({ organization: id });
    };

    // Rendering the organization item with an image and a hint
    return (
        <div className="aspect-square relative">
            {/* Adding a hint for organization name */}
            <Hint label={name} side="right" align="start" sideOffset={18}>
                {/* Rendering the organization image */}
                <Image
                    fill
                    alt={name}
                    src={imageUrl}
                    onClick={onClick}
                    className={cn(
                        "rounded-md cursor-pointer opacity-75 hover:opacity-100 transition",
                        isActive && "opacity-100"
                    )}
                />
            </Hint>
        </div>
    );
};
