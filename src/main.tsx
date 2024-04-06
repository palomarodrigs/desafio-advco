import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from './styles/theme.ts'
import { ChakraProvider } from '@chakra-ui/react'
import { Routes } from './routes/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  </React.StrictMode>,
)
