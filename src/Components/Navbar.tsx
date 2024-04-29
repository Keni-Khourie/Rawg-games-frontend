import { HStack, Image} from '@chakra-ui/react'
import elephantGirlLogo from '../assets/elephant_girl_logo.png'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props{
  onSearch: (searchText: string) => void;
}

const Navbar = ({onSearch}: Props) => {
  return (
    <HStack  padding={"2rem"}>
        <Image src={elephantGirlLogo} boxSize={'100px'}/>
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default Navbar