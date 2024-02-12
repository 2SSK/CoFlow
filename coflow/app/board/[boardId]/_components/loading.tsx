import { Loader } from "lucide-react";

import { InfoSkeleton } from "./info";
import { ToolbarSkeleton } from "./toolbar";
import { ParticipantsSkeleton } from "./participants";

// Loading component renders a loading state with spin animation and skeleton placeholders
export const Loading = () => {
    return (
        <main className="h-full w-full relative bg-neutral-100 touch-none flex items-center justify-center">
            {/* Loader component for spin animation */}
            <Loader className="h-6 w-6 text-muted-foreground animate-spin" />
            {/* Placeholder skeleton for information section */}
            <InfoSkeleton />
            {/* Placeholder skeleton for participants section*/}
            <ParticipantsSkeleton />
            {/* Placeholder skeleton for toolbar section */}
            <ToolbarSkeleton />
        </main>
    );
};
