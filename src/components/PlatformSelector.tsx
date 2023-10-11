import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronBarDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'

const PlatformSelector = () => {
   const {Data ,error} = usePlatforms();

   if (error) return null;  

  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronBarDown/>}>Platforms</MenuButton>
        <MenuList>
               {Data.map(platform => <MenuItem key={platform.id}>{platform.name}</MenuItem>)}

        </MenuList>
    </Menu>  
  )
}

export default PlatformSelector