import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../Hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '../App';



interface Props{
  gameQuery: GameQuery
  
}

const GameGrid = ({gameQuery}: Props) => {
  const {data, errorMessage, isLoading} = useGames(gameQuery)
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <>
    {errorMessage && <Text>{errorMessage}</Text>}
    <SimpleGrid columns={{sm:1, md: 2, lg:3, xl:4}} spacing={6} padding={'10'}>
        {isLoading && skeletons.map(skeleton => 
        <GameCardContainer key={skeleton}>
          <GameCardSkeleton />
        </GameCardContainer>)}
        {data.map(game=> 
        <GameCardContainer  key={game.id}>
          <GameCard game={game}/>
        </GameCardContainer>
        )}
    </SimpleGrid>
    </>
  )
}

export default GameGrid

//Previous version of this component:

/*
  import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames, { Platform } from '../Hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../Hooks/useGenres';


interface Props{

  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({selectedGenre, selectedPlatform}: Props) => {
  const {data, errorMessage, isLoading} = useGames(selectedGenre, selectedPlatform)
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <>
    {errorMessage && <Text>{errorMessage}</Text>}
    <SimpleGrid columns={{sm:1, md: 2, lg:3, xl:5}} spacing={3} padding={'10'}>
        {isLoading && skeletons.map(skeleton => 
        <GameCardContainer key={skeleton}>
          <GameCardSkeleton />
        </GameCardContainer>)}
        {data.map(game=> 
        <GameCardContainer  key={game.id}>
          <GameCard game={game}/>
        </GameCardContainer>
        )}
    </SimpleGrid>
    </>
  )
}

export default GameGrid
 */