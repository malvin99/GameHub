import { Heading, Image } from "@chakra-ui/react";
import useGameTrailers from "../hooks/useGameTrailers";
import videoPlaceHolder from  "../assets/no-image-placeholder.webp"

function GameTrailer() {
    const { gameTrailer } = useGameTrailers();
    
    const videoUrl = gameTrailer?.results && gameTrailer.results.length > 0 
    ? gameTrailer.results[0].data[480] 
    : null;

    return (
            <div>
                <Heading as="h2" size="lg">Game Trailer</Heading>
    
                {/* Check if a video URL exists before rendering the video element */}
                {videoUrl ? (
                    <video controls width="600" autoPlay>
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <>
                    <Heading size="md">No trailer available</Heading>
                    <Image src = {videoPlaceHolder}/>
                    </>
                    
                )}
            </div>
        );
}

export default GameTrailer;
