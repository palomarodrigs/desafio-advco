import { Box, useTheme } from '@chakra-ui/react'

type BorderType = 'borderBottom' | 'borderLeft'

interface CustomDividerProps {
  border: BorderType
}

export function Divider({ border }: CustomDividerProps) {
  const theme = useTheme()
  const borderStyle = `1px solid ${theme.colors.gray[100]}`

  return (
    <Box
      display={{ base: 'none', md: 'block' }}
      width={border === 'borderBottom' ? 'full' : 'auto'}
      borderBottom={border === 'borderBottom' ? borderStyle : 'none'}
      borderLeft={border === 'borderLeft' ? borderStyle : 'none'}
    />
  )
}
