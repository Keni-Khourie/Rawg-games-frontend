import { HStack, Image} from '@chakra-ui/react'
import elephantGirlLogo from '../assets/elephant_girl_logo.png'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const Navbar = () => {
  return (
    <HStack  padding={"2rem"}>
        <Image src={elephantGirlLogo} boxSize={'100px'}/>
        <SearchInput/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default Navbar