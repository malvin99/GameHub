import { Box, Grid, GridItem, Heading } from "@chakra-ui/react"
import useGame from "../hooks/useGame"
import ExpandableText from "../components/ExpandableText"
import GameMetaData from "../components/GameMetaData"
import GameTrailer from "../components/GameTrailer"


function GameDetailPage () {

    const {gameDetails} = useGame()
   
    return (
      <>
        <Grid>
          <GridItem>
            <Box>
              <Heading size="lg"> {gameDetails?.name} </Heading>
              <ExpandableText>{Array.isArray(gameDetails?.description_raw) ? gameDetails?.description_raw.join(" ") : gameDetails?.description_raw || ""}</ExpandableText>
            </Box>
          </GridItem>
        </Grid>

        <Grid paddingTop={10} templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}>
              <GridItem>
                  <GameMetaData gameMetadata={gameDetails} />
              </GridItem>

              <GridItem>
                  <GameTrailer/>
              </GridItem>
        </Grid>
      
        
        
      </>
    )

}

export default  GameDetailPage