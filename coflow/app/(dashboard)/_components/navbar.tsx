"use client";

// Importing necessary dependencies and components
import {
    UserButton,
    OrganizationSwitcher,
    useOrganization,
} from "@clerk/nextjs";

import { SearchInput } from "./search-input";
import { InviteButton } from "./invite-button";

// Component for rendering the navbar
export const Navbar = () => {
    // Accessing organization information using the useOrganization hook
    const { organization } = useOrganization();

    return (
        // Container for the navbar
        <div className="flex items-center gap-x-4 p-5">
            <div className="hidden lg:flex lg:flex-1">
                <SearchInput />
            </div>
            <div className="block lg:hidden flex-1">
                {/* Organization switcher, visible on small screens */}
                <OrganizationSwitcher
                    hidePersonal
                    appearance={{
                        elements: {
                            rootBox: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                                maxWidth: "376px",
                            },
                            organizationSwitcherTrigger: {
                                padding: "6px",
                                width: "100%",
                                borderRadius: "8px",
                                border: "1px solid #E5E7EB",
                                justifyContent: "space-between",
                                backgroundColor: "white",
                            },
                        },
                    }}
                />
            </div>
            {/* Invite button, visible if organization is present */}
            {organization && <InviteButton />}
            {/* Button for user-related actions */}
            <UserButton />
        </div>
    );
};
