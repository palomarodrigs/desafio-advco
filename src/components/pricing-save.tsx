import { Flex, Text } from '@chakra-ui/react'

interface PricingSaveProps {
  children: React.ReactNode
}

export function PricingSave({ children }: PricingSaveProps) {
  return (
    <Flex
      align="center"
      justify="center"
      gap="5px"
      px="7px"
      color="brand.100"
      borderRadius="3px"
      border="1px"
      borderColor="brand.100"
      fontSize="14px"
    >
      <Text>Save</Text>
      <Text>{children}</Text>
    </Flex>
  )
}
