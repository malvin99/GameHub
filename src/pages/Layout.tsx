import { Outlet } from "react-router-dom"
import NavBar from "../components/NavigationBar"
import { Box } from "@chakra-ui/react"

function Layout () {

    return (
        <>
            <NavBar />

            <Box padding = {5}>
                <Outlet />
            </Box>
            
        </>
        )
}

export default Layout