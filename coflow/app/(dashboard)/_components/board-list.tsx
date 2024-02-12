"use client";

// Importing necessary dependencies and components
import { useQuery } from "convex/react";

import { api } from "@/convex/_generated/api";

import { BoardCard } from "./board-card";
import { EmptySearch } from "./empty-search";
import { EmptyBoards } from "./empty-boards";
import { EmptyFavorites } from "./empty-favorites";
import { NewBoardButton } from "./new-board-button";

// Interface defining props for BoardList component
interface BoardListProps {
    orgId: string;
    query: {
        search?: string;
        favorites?: string;
    };
}

// BoardList component responsible for rendering a list of boards
export const BoardList = ({ orgId, query }: BoardListProps) => {
    // Fetching board data based on the query parameters
    const data = useQuery(api.boards.get, {
        orgId,
        ...query,
    });

    // If data is still loading
    if (data === undefined) {
        return (
            <div>
                <h2 className="text-3xl">
                    {query.favorites ? "Favorite boards" : "Team boards"}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
                    <NewBoardButton orgId={orgId} disabled />
                    <BoardCard.Skeleton />
                    <BoardCard.Skeleton />
                    <BoardCard.Skeleton />
                    <BoardCard.Skeleton />
                </div>
            </div>
        );
    }

    // If no boards are found and there is a search query
    if (!data?.length && query.search) {
        return <EmptySearch />;
    }

    // If no boards are found and the favorites query is active
    if (!data?.length && query.favorites) {
        return <EmptyFavorites />;
    }

    // If no boards are found
    if (!data?.length) {
        return <EmptyBoards />;
    }

    // Iff boards are found, render the list of boards
    return (
        <div>
            <h2 className="text-3xl">
                {query.favorites ? "Favorite boards" : "Team boards"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
                <NewBoardButton orgId={orgId} />
                {/* Mapping over the board data and rendering each board card */}
                {data?.map((board) => (
                    <BoardCard
                        key={board._id}
                        id={board._id}
                        title={board.title}
                        imageUrl={board.imageUrl}
                        authorId={board.authorId}
                        authorName={board.authorName}
                        createdAt={board._creationTime}
                        orgId={board.orgId}
                        isFavorite={board.isFavorite}
                    />
                ))}
            </div>
        </div>
    );
};
