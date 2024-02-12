"use client";

import { memo } from "react";
import { shallow } from "@liveblocks/client";

import { useOthersConnectionIds, useOthersMapped } from "@/liveblocks.config";
import { colorToCss } from "@/lib/utils";

import { Cursor } from "./cursor";
import { Path } from "./path";

// Cursors component to render all teammate cursors
const Cursors = () => {
    const ids = useOthersConnectionIds();

    return (
        <>
            {/* Rendering Cursor component for each teammate */}
            {ids.map((connectionId) => (
                <Cursor key={connectionId} connectionId={connectionId} />
            ))}
        </>
    );
};

// Drafts component to render draft paths drawn by teammates
const Drafts = () => {
    const others = useOthersMapped(
        // Mapping over other teammates to extract pencil draft and pen color
        (other) => ({
            pencilDraft: other.presence.pencilDraft,
            penColor: other.presence.penColor,
        }),
        shallow  // Using shallow comparison for memorization
    );

    return (
        <>
        {/* Rendering Path component for each teammate's pencil draft */}
            {others.map(([key, other]) => {
                if (other.pencilDraft) {
                    return (
                        <Path
                            key={key}
                            x={0}
                            y={0}
                            points={other.pencilDraft}
                            fill={
                                other.penColor
                                    ? colorToCss(other.penColor)
                                    : "#000"
                            }
                        />
                    );
                }

                return null;
            })}
        </>
    );
};

// Cursor component to render both Cursors and Drafts components
export const CursorsPresence = memo(() => {
    return (
        <>
            <Drafts />
            <Cursors />
        </>
    );
});

CursorsPresence.displayName = "CursorsPresence";
