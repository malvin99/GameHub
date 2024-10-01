
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames, { Platform } from '../hooks/useGames';
import GameCard from './GameCard';
import { Genres } from '../hooks/useGenres';
import { useOutletContext } from 'react-router-dom';

interface Props {
    selectedGenre: Genres | null
    selectedPlatform: Platform | null
    selectedOrder: string | null
}



function GameGrid ({selectedGenre, selectedPlatform, selectedOrder}: Props) {
    const { searchTerm } = useOutletContext<{ searchTerm: string }>(); // Get searchTerm from context

    const { games, error } = useGames(selectedGenre, selectedPlatform, selectedOrder, searchTerm);

    if (error) return <Text> {error} </Text>
    if (!games.length) return <Text>No games found</Text>;
    return (
            <SimpleGrid columns={{sm:1, md: 2, lg:3}} padding="10px" spacing={2}>
                {games.map(game => <GameCard key={game.id} game={game}/>)}
            </SimpleGrid>
    )

}

export default GameGrid