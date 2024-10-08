import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatforms from "../Hooks/usePlatforms"
import { Platform } from "../Hooks/useGames"

interface Props{
    onSelectPlatform: (platform: Platform)=>void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatform}: Props) => {
    const {data, errorMessage}= usePlatforms()
    if (errorMessage) return null
  return (
   <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{selectedPlatform?.name || 'Platforms'}</MenuButton>
        <MenuList>
            {data?.results.map(platform => <MenuItem onClick={()=> onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList> 
   </Menu>
  )
}

export default PlatformSelector