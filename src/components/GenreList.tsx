import { HStack, List, ListItem } from "@chakra-ui/layout"
import useGenres, { Genres } from "../hooks/useGenres"
import { Button, Heading, Image, Spinner } from "@chakra-ui/react"
import ImageResizer from "../services/ImageResizer"

interface Props {
    onSelectGenre : (genre: Genres) => void;
}

function GenreList ({onSelectGenre}: Props) {

    const {genres, isLoading, error} = useGenres()

    if (error) return null
    if (isLoading) return <Spinner />
    return (

        <>
        <Heading as = "h5" size="lg" marginBottom={6}> Genres </Heading>
        <List> 
            {genres.map(genre => 
                <ListItem key={genre.id} py="5px">
                    <HStack> 
                        <Image objectFit="cover" boxSize = "30px" borderRadius = {8} src= {ImageResizer(genre.image_background)} />
                        <Button whiteSpace="normal" textAlign="left"  onClick = {() =>onSelectGenre(genre)} variant="link"> {genre.name} </Button>
                    </HStack>
                  
                  
                 </ListItem>)}
        </List>
        </>

    )


}

export default GenreList