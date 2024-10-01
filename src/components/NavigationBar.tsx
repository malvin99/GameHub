import { HStack, Image } from "@chakra-ui/react"
import SiteLogo from "../assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchBox from './SearchBox'
import { Link } from "react-router-dom";

interface Props {
    onSearch: (searchTerm: string | undefined) => void; // Prop to handle search input. Remove
}


function NavBar ({onSearch}: Props) {

    return (
        <HStack
         width="100%"        // Make HStack take full width
         padding="0"
         margin="0"
         spacing="0"
         justifyContent="space-around">
                <Link to= '/'> 
                    <Image src={SiteLogo} boxSize="50px" objectFit='cover'></Image>
                </Link>
                
                <SearchBox onSearch={onSearch} /> {/* Pass the onSearch prop. Not original. Remove */}
                <ColorModeSwitch />
        </HStack>
        )

}

export default NavBar