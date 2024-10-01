import { Box, Grid, GridItem, Heading } from "@chakra-ui/react"
import useGame from "../hooks/useGame"
import ExpandableText from "../components/ExpandableText"
import GameMetaData from "../components/GameMetaData"
import GameTrailer from "../components/GameTrailer"
import ScreenShots from "../components/Screenshots"


function GameDetailPage () {

    const {gameDetails} = useGame()
   
    return (
      <>
        <Grid templateColumns={{base: "1fr", md: "repeat(2, 1fr)"}} gap={6}>
          <GridItem>
            <Box>
              <Heading size="lg"> {gameDetails?.name} </Heading>
              <ExpandableText>{Array.isArray(gameDetails?.description_raw) ? gameDetails?.description_raw.join(" ") : gameDetails?.description_raw || ""}</ExpandableText>
            </Box>

            <Box paddingTop={10}>
                <GameMetaData gameMetadata={gameDetails} />
            </Box>
          </GridItem>

          <GridItem>
                  <GameTrailer/>
                  <ScreenShots/>
          </GridItem>
        </Grid>
              

              
      
        
        
      </>
    )

}

export default  GameDetailPage