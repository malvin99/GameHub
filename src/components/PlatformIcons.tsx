import { Platform } from "../hooks/useGames"
import { HStack, Icon } from "@chakra-ui/react"
import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa'
import { MdPhoneIphone } from "react-icons/md"
import { SiNintendo } from "react-icons/si"
import { BsGlobe } from "react-icons/bs"
import { IconType } from "react-icons"

interface Props {
    platforms: Platform[]
}

function PlatformIcons ({platforms}: Props) {

    const iconMap: { [key: string]: IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
    }

    return (
        <HStack my={2}>
        {platforms.map(platform => {
            // @ts-ignore - Ignore TypeScript error for this line
            const IconComponent = iconMap[platform.slug]; // Get the icon from the map
            if (!IconComponent) return null; // Skip rendering if no matching icon

            return <Icon key={platform.id} as={IconComponent} color="gray.500" />;
        })}
    </HStack>
)

}

export default PlatformIcons