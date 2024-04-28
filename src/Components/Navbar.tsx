import { HStack, Image} from '@chakra-ui/react'
import elephantGirlLogo from '../assets/elephant_girl_logo.png'
import ColorModeSwitch from './ColorModeSwitch'

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"2rem"}>
        <Image src={elephantGirlLogo} boxSize={'100px'}/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default Navbar