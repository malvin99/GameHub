import { Box, Image, Text } from "@chakra-ui/react";
import useGameTrailers from "../hooks/useGameTrailers";
import videoPlaceHolder from  "../assets/no-video-placeholder.webp"



function GameTrailer() {
    const { gameTrailer } = useGameTrailers();
    
    //@ts-ignore
    const videoUrl = gameTrailer?.results && gameTrailer.results.length > 0 
    //@ts-ignore
    ? gameTrailer.results[0].data[480] 
    : null;

    return (
            <div>
    
                {/* Check if a video URL exists before rendering the video element */}
                {videoUrl ? (
                    <video controls width="1080" autoPlay>
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <>
                        <Box position="relative" display="inline-block">
                            <Image src = {videoPlaceHolder}/>
                            <Text
                                    position="absolute"
                                    bottom="10px"
                                    left="10px"
                                    color="white"
                                    fontSize="lg"
                                    fontWeight="bold"
                                    bg="rgba(0, 0, 0, 0.5)"
                                    p="4px"
                                    borderRadius="md"
                            > 
                                No Game Trailer
                            </Text>
                        </Box>
                        
                    </>
                    
                )}
            </div>
        );
}

export default GameTrailer;
