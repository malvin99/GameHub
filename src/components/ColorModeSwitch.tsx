import {HStack, Switch, useColorMode } from "@chakra-ui/react"

function ColorModeSwitch () {

    const {toggleColorMode, colorMode} = useColorMode()
    return (

        <HStack> 
            <Switch onChange={toggleColorMode} isChecked={colorMode==="dark"}>
            </Switch>
        </HStack>
    )


}

export default ColorModeSwitch