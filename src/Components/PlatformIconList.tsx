import { Platform } from "../Hooks/useGames"
import { HStack, Icon } from "@chakra-ui/react"
import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from "react-icons/fa"
import { MdPhoneIphone } from "react-icons/md"
import { SiNintendo } from "react-icons/si"
import { BsGlobe } from "react-icons/bs"
import { IconType } from "react-icons"

interface Props{
    platforms: Platform[]
}

const PlatformIconList = ({platforms}: Props) => {
    const iconMap: {[key: string]: IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        android: FaAndroid,
        web: BsGlobe
    }
  return (
    <HStack marginY={1}>
         {platforms.map((platform) => <Icon key={platform.id} as={iconMap[platform.slug]} color={'gray.500'}/>)}
            
    
    </HStack>
  )
}

export default PlatformIconList


// {game.parent_platforms.map(({platform}) => <Text>{platform.name}</Text>)}
{/*The code in the line above does the same as the one below, it is just that in the above line, the object has been destructured to return the platform property (Recall the). That way you dont have to write platform.platform.name */}
{/* {game.parent_platforms.map(platform => <Text>{platform.platform.name}</Text>)} */} 