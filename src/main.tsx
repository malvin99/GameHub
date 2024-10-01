import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './Theme.ts'
import { RouterProvider } from 'react-router-dom'
import routes from './routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <RouterProvider router ={routes}></RouterProvider>
      </ChakraProvider>
    
  </StrictMode>,
)
