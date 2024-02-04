import { Sidebar } from "./_components/sidebar";
import { OrgSidebar } from "./_components/org-sidebar";

interface DashbordLayoutProps {
    children: React.ReactNode;
}

const DashbordLayout = ({ children }: DashbordLayoutProps) => {
    return (
        <main className="h-full">
            <Sidebar />
            <div className="pl-[60px] h-full">
                <div className="flex gap-x-3 h-full">
                    <OrgSidebar />
                    <div className="h-full flex-1">
                        {/* Add Navbar */}
                        {children}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default DashbordLayout;
