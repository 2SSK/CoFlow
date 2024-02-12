"use client";

// Importing necessary hooks and components
import { useOrganization } from "@clerk/nextjs";

import { EmptyOrg } from "./_components/empty-org";
import { BoardList } from "./_components/board-list";

// Interface defining props for DashboardPage component
interface DashboardPageProps {
    searchParams: {
        search?: string;
        favorites?: string;
    };
}

// DashboardPage component responsible for rendering the dashboard
const DashboardPage = ({ searchParams }: DashboardPageProps) => {
    // Using the useOrganization hook to retrieve organization information
    const { organization } = useOrganization();

    return (
        // Container for the dashboard content with flex layout
        <div className="flex-1 h-[calc(100%-80px)] p-6">
            {!organization ? (
                <EmptyOrg />
            ) : (
                <BoardList orgId={organization.id} query={searchParams} />
            )}
        </div>
    );
};

export default DashboardPage;
