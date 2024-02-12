import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

import { Toaster } from "@/components/ui/sonner";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { ModalProvider } from "@/providers/modal-provider";
import { Loading } from "@/components/auth/loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "CoFlow",
    description:
        "coFlow is a collaborative platform designed for efficient team collaboration, brainstorming, and project planning. It provides a virtual canvas for teams to ideate and innovate in real-time.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Suspense fallback={<Loading />}>
                    <ConvexClientProvider>
                        <Toaster />
                        <ModalProvider />
                        {children}
                    </ConvexClientProvider>
                </Suspense>
            </body>
        </html>
    );
}
