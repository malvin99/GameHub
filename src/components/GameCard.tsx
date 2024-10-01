import { Card, CardBody, Heading, Image, HStack} from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
import ImageResizer from "../services/ImageResizer";
import { Link } from "react-router-dom";

interface Props {
    game: Game;
}

function GameCard ({game}:Props) {

    return (

        <Card borderRadius={10} overflow="hidden" 
        _hover = {{
            transform: 'scale(1.03)',
            transition: 'transform .15s ease-in',
        }}>
            <Image src = {ImageResizer(game.background_image)}></Image>
            <CardBody>
                <HStack justifyContent='space-between' marginBottom={3}>
                    <PlatformIcons platforms={game.parent_platforms.map(platform => platform.platform)} />
                    <CriticScore score={game.metacritic}/>
                </HStack>
                <Link to={'/games/' + game.slug +'/' + game.id }> 
                    <Heading fontSize="2xl"> {game.name} </Heading>
                </Link>
                
            </CardBody>
        </Card>
    )


}

export default GameCard