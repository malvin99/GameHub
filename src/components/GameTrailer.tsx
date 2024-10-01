import { Image } from "@chakra-ui/react";
import useGameTrailers from "../hooks/useGameTrailers";
import videoPlaceHolder from  "../assets/no-image-placeholder.webp"

function GameTrailer() {
    const { gameTrailer } = useGameTrailers();
    
    const videoUrl = gameTrailer?.results && gameTrailer.results.length > 0 
    ? gameTrailer.results[0].data[480] 
    : null;

    return (
            <div>
    
                {/* Check if a video URL exists before rendering the video element */}
                {videoUrl ? (
                    <video controls width="600" autoPlay>
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <>
                    <Image src = {videoPlaceHolder}/>
                    </>
                    
                )}
            </div>
        );
}

export default GameTrailer;
