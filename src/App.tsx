import {  Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavigationBar'
import GameGrid from './components/GameGrid'
import SkeletonLoader from './components/SkeletonLoader'
import useGames, { Platform } from './hooks/useGames'
import GenreList from './components/GenreList'
import { Genres } from './hooks/useGenres'
import { useState } from 'react'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'



function App () {
  const {isLoading} = useGames(null, null, null)

  const [selectedGenre, setSelectedGenre] = useState<Genres | null >(null)
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null)


  return (
      <>
      {isLoading && <SkeletonLoader/>}
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}

      templateColumns={{
        lg: "1fr 6fr", // 3fr for ASIDE, 3fr for MAIN
      }}
      
      width= "100vw"
      padding= "0"
      margin ="0">

             <GridItem area = "nav" paddingTop={2}>
                  <NavBar />
             </GridItem>
            
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

export default App