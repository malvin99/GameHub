import { Outlet } from "react-router-dom"
import NavBar from "../components/NavigationBar"
import { Box } from "@chakra-ui/react"
import { useState } from "react";

function Layout () {
    const [searchTerm, setSearchTerm] = useState<string>(''); // State for search term. Delete it.


    return (
        <>
            {/*@ts-ignore*/}
            <NavBar onSearch={setSearchTerm} /> 
            <Box padding = {5}>
            <Outlet context={{ searchTerm }} /> {/* Pass searchTerm via context to child components. Original contained not context */} 
            </Box>
            
        </>
        )
}

export default Layout