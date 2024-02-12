"use client";

import { useOrganizationList } from "@clerk/nextjs";

import { Item } from "./item";

// List component renders the list of organizations the user is a member of
export const List = () => {
    // Getting user memberships data from Clerk organization list context
    const { userMemberships } = useOrganizationList({
        userMemberships: {
            infinite: true,
        },
    });

    // If there are no user memberships, return null (no organizations to display)
    if (!userMemberships.data?.length) return null;

    // Rendering the list of organizations as unordered list
    return (
        <ul className="space-y-4">
            {userMemberships.data?.map((mem) => (
                <Item
                    key={mem.organization.id}
                    id={mem.organization.id}
                    name={mem.organization.name}
                    imageUrl={mem.organization.imageUrl}
                />
            ))}
        </ul>
    );
};
