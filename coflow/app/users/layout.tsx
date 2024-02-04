interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-col gap-y-4">
            <nav>I am a reusable navbar!</nav>
            {children}
        </div>
    );
};

export default Layout;
