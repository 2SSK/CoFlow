// Importing necessary dependencies
"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react";
import { ConvexClientProvider as LocalConvexClientProvider } from "./convex-client-provider";
import { Children } from "react";
import { Loading } from "../components/auth/loading";

// Defining the props for ConvexClientProvider component
interface ConvexClientProviderProps {
    children: React.ReactNode;
}

// Retrieving the Convex URL from environment variables
const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

// Creating an instance of ConvexReactClient with the specified URL
const convex = new ConvexReactClient(convexUrl);

// Exporting the ConvexClientProvider component
export const ConvexClientProvider = ({
    children,
}: ConvexClientProviderProps) => {
    return (
        // Wrapping the application with ClerkProvider and ConvexProviderWithClerk
        <ClerkProvider>
            <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
                <Authenticated>{children}</Authenticated>
                <AuthLoading>
                    <Loading />
                </AuthLoading>
            </ConvexProviderWithClerk>
        </ClerkProvider>
    );
};
