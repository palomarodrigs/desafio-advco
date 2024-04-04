import { extendTheme } from '@chakra-ui/react'

const customTheme = {
  fonts: {
    body: 'Graphik, sans-serif',
    heading: 'Graphik, sans-serif',
  },

  colors: {
    brand: {
      100: '#01a1c1',
    },

    white: {
      100: '#FFFFFF',
      200: '#FAF9F7',
      300: '#F3F2F0',
    },

    black: {
      800: '#313030',
      900: '#1C1B1A',
    },

    gray: {
      100: '#DAD9D7',
      200: '#6E6D6C',
      300: '#5B5A58',
    },

    orange: {
      100: '#FE5F50',
    },
  },

  styles: {
    global: {
      body: {
        bg: 'white.100',
        color: 'black.800',
      },
    },
  },
}

const theme = extendTheme(customTheme)

export default theme
