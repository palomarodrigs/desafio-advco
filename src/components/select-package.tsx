import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import { ProductIncludeList } from './product-include-list'
import { FaArrowDown } from 'react-icons/fa'

export function SelectPackage() {
  return (
    <Flex
      display={{ base: 'none', lg: 'flex' }}
      direction="column"
      gap="24px"
      h="560px"
      p="30px"
      border="1px solid"
      borderColor="gray.100"
      borderRadius="md"
    >
      <Heading fontSize="32px">Logo & brand identity pack</Heading>

      <Text fontFamily="Graphik Medium, sans-serif" fontSize="19px" fontWeight="700">
        Starting from $599
      </Text>

      <ProductIncludeList />

      <Button
        py="20px"
        px="24px"
        gap="10px"
        color="white.100"
        bg="black.800"
        borderRadius="full"
        transition="0.5s"
      >
        Select a package
        <FaArrowDown />
      </Button>
    </Flex>
  )
}
