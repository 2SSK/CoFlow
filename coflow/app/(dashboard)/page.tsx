"use client";

import { useOrganization } from "@clerk/nextjs";
import { EmptyOrg } from "./_components/empty-org";

const DashbordPage = () => {
    const { organization } = useOrganization();

    return (
        <div className=" flex-1 h-[calc(100%-80px)] p-6">
            {!organization ? <EmptyOrg /> : <p>BoardList!</p>}
        </div>
    );
};

export default DashbordPage;
