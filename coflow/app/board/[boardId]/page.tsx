import { Room } from "@/components/room";

import { Canvas } from "./_components/canvas";
import { Loading } from "./_components/loading";

interface BoardIdPageProps {
    params: {
        boardId: string;
    };
}

// BoardIdPage component renders a page for a specific board
const BoardIdPage = ({ params }: BoardIdPageProps) => {
    return (
        // Wrapping the Canvas component inside a Room component to manage room state
        <Room roomId={params.boardId} fallback={<Loading />}>
            {/* Rendering the Canvas component with the specified board ID */}
            <Canvas boardId={params.boardId} />
        </Room>
    );
};

export default BoardIdPage;
