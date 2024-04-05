import { StarIcon } from '@chakra-ui/icons'
import { Flex, Text } from '@chakra-ui/react'

export function Badge() {
  return (
    <Flex
      align="center"
      justify="center"
      gap="5px"
      w="125px"
      p="5px"
      bg="brand.100"
      borderRadius="full"
      color="white.100"
      fontSize="14px"
    >
      <StarIcon />

      <Text>Most popular</Text>
    </Flex>
  )
}
