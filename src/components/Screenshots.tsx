import { Image, SimpleGrid } from "@chakra-ui/react"
import useScreenShots, { ScreenShots } from "../hooks/useScreenShots"


function ScreenShots () {
    const {screenShots} = useScreenShots()
    console.log(screenShots)

    return (
        <SimpleGrid columns ={{base: 1, md: 2}} spacing={2}>
            {screenShots?.results.map((file:ScreenShots) => <Image src = {file.image}/>)}

        </SimpleGrid>
    )
}

export default ScreenShots