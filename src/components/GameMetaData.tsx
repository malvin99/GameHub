import { Box, Grid, GridItem, Text } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"


interface Props {

    gameMetadata: Game | undefined;
}

function GameMetaData ({gameMetadata}: Props) {

    return (
        <Grid templateColumns={{ base: "repeat(2, 1fr)" }} // 1 column on small screens, 2 on medium and larger
        gap={6}>

            <GridItem>
                <Text><b>Platforms:</b></Text>
                <Box>
                {gameMetadata?.parent_platforms.map((platform) => (
                    <Text key={platform.platform.id} > {/* Using Text instead of li */}
                        {platform.platform.name}
                    </Text>
                ))}
                </Box>
            </GridItem>
            
            <GridItem>
                <Box>
                    <Text><b>  Metacritic Score: </b></Text>
                    <Text> {gameMetadata?.metacritic} </Text>
                </Box>

                <Box>
                    <Text><b>  Release Date: </b></Text>
                    <Text> {gameMetadata?.released} </Text>
                </Box>

                <Box>
                    <Text><b>  Publisher Website: </b></Text>
                    <Text><a href= {gameMetadata?.website}> {gameMetadata?.website} </a> </Text>
                </Box>

                <Box>
                    <Text> <b> Run Time (Hours): </b></Text>
                    <Text> {gameMetadata?.playtime} </Text>
                </Box>
            </GridItem>
            
        </Grid>
    );
}

export default GameMetaData