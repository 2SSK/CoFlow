"use client";

import { memo } from "react";
import { MousePointer2 } from "lucide-react";

import { useOther } from "@/liveblocks.config";
import { connectionIdToColor } from "@/lib/utils";

// Props interface for Cursor component
interface CursorProps {
    connectionId: number;
}

// Cursor component to display teammate cursors on the canvas
export const Cursor = memo(({ connectionId }: CursorProps) => {
    const info = useOther(connectionId, (user) => user?.info);
    const cursor = useOther(connectionId, (user) => user.presence.cursor);

    const name = info?.name || "Teammate";

    // If cursor position is not available, return null
    if (!cursor) {
        return null;
    }

    const { x, y } = cursor;  // Extracting cursor coordinates

    return (
        <foreignObject
            style={{
                transform: `translateX(${x}px) translateY(${y}px)`,
            }}
            height={50}
            width={name.length * 10 + 24}
            className="relative drop-shadow-md"
        >
            <MousePointer2
                className="h-5 w-5"
                style={{
                    fill: connectionIdToColor(connectionId),
                    color: connectionIdToColor(connectionId),
                }}
            />
            <div
                className="absolute left-5 px-1.5 py-0.5 rounded-md text-xs text-white font-semibold"
                style={{ backgroundColor: connectionIdToColor(connectionId) }}
            >
                {name}
            </div>
        </foreignObject>
    );
});

Cursor.displayName = "Cursor";
