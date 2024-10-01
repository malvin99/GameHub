import {  Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import useGames, { Platform } from '../hooks/useGames'
import { useState } from 'react'
import { Genres } from '../hooks/useGenres'
import SkeletonLoader from '../components/SkeletonLoader'
import GenreList from '../components/GenreList'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'
import GameGrid from '../components/GameGrid'



function HomePage () {

  const {isLoading} = useGames(null, null, null)

  const [selectedGenre, setSelectedGenre] = useState<Genres | null >(null)
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null)
  


  return (
      <>
      {isLoading && <SkeletonLoader/>}
      <Grid templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}

      templateColumns={{
        lg: "1fr 6fr", // 3fr for ASIDE, 3fr for MAIN
      }}
      
      width= "100vw"
      padding= "0"
      margin ="0">

              <Show above ="lg">
                <GridItem area = "aside" px={5}> <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} /> </GridItem>
              </Show>
            
              <GridItem area = "main"> 
                  <HStack spacing = {5} paddingLeft = {2} marginBottom = {5}>
                      <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform) => setSelectedPlatform(platform)} />
                      <SortSelector CurrentSortOrder= {selectedOrder} onSelectSortOrder={setSelectedOrder} />
                  </HStack>
                  <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} selectedOrder ={selectedOrder}/>
              </GridItem>

      </Grid>
      </>
)}

export default HomePage