"use client";

// Importing necessary dependencies and components
import qs from "query-string";
import { Search } from "lucide-react";
import { useDebounce } from "usehooks-ts";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

import { Input } from "@/components/ui/input";

// Component for rendering the search input field
export const SearchInput = () => {
    const router = useRouter();
    const [value, setValue] = useState("");
    const debouncedValue = useDebounce(value, 500);

    // Event handler for input value changes
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    // Effect to update the URL query parameter when the debounced value changes
    useEffect(() => {
        // Constructing the new URL with updated search query parameter
        const url = qs.stringifyUrl(
            {
                url: "/",
                query: {
                    search: debouncedValue,     // Updated search query parameter
                },
            },
            { skipEmptyString: true, skipNull: true }   // Options for query-string library
        );

        // Navigating to the new URL
        router.push(url);
    }, [debouncedValue, router]);   // Dependency array including debouncedValue and router

    // Rendering the search input field
    return (
        <div className="w-full relative">
            <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
                className="w-full max-w-[516px] pl-9"
                placeholder="Search boards"
                onChange={handleChange}
                value={value}
            />
        </div>
    );
};
