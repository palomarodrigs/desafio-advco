import { Button } from '@chakra-ui/button'
import { Text } from '@chakra-ui/layout'

interface ButtonMenuProps {
  children: React.ReactNode
  mr?: string
  bg?: string
  color?: string
  disableHover?: boolean
}

export function ButtonCategoryMenu({
  children,
  mr,
  bg,
  color,
  disableHover,
}: ButtonMenuProps) {
  return (
    <Button
      size="auto"
      py="25px"
      px="30px"
      mr={mr || '15px'}
      bg={bg || 'gray.100'}
      color={color || 'black.800'}
      _hover={disableHover ? { bg: 'brand.100' } : { bg: 'white.100', boxShadow: 'lg' }}
    >
      <Text fontSize="19px">{children}</Text>
    </Button>
  )
}
