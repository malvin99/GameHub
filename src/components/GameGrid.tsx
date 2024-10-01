
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames, { Platform } from '../hooks/useGames';
import GameCard from './GameCard';
import { Genres } from '../hooks/useGenres';

interface Props {
    selectedGenre: Genres | null
    selectedPlatform: Platform | null
    selectedOrder: string | null
}



function GameGrid ({selectedGenre, selectedPlatform, selectedOrder}: Props) {

    const {games, error} = useGames(selectedGenre, selectedPlatform, selectedOrder)

    if (error) return <Text> {error} </Text>
    if (!games.length) return <Text>No games found</Text>;
    return (
            <SimpleGrid columns={{sm:1, md: 2, lg:3}} padding="10px" spacing={2}>
                {games.map(game => <GameCard key={game.id} game={game}/>)}
            </SimpleGrid>
    )

}

export default GameGrid