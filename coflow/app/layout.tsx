// Importing necessary dependencies and styles
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { Toaster } from "@/components/ui/sonner";

// Creating an instance of the Inter font with the Latin subset
const inter = Inter({ subsets: ["latin"] });

// Metadata for the page
export const metadata: Metadata = {
    title: "CoFlow",
    description:
        "coFlow is a collaborative platform designed for efficient team collaboration, brainstorming, and project planning. It provides a virtual canvas for teams to ideate and innovate in real-time.",
};

// RootLayout component to provide a consistent layout for the entire application
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {/* Wrapping the application with ConvexClientProvider for authentication and Convex context */}
                <ConvexClientProvider>
                    <Toaster />
                    {children}
                </ConvexClientProvider>
            </body>
        </html>
    );
}
