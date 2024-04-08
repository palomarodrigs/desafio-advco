import { Flex, Heading, Image, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import { FaCheck, FaChevronRight } from 'react-icons/fa'
import CollaborationMethodContext from '../assets/collaboration-method-context.png'

export function ProductCollaboration() {
  return (
    <Flex
      direction="column"
      gap="8px"
      p={['0px', '24px']}
      bg={['white.100', 'white.200']}
      position="relative"
    >
      <Heading fontSize="19px">Contest Bundle</Heading>

      <Text>
        Open your design brief to our entire community. Designers submit their ideas and
        you pick your favorite design.
      </Text>

      <List>
        <ListItem>
          <ListIcon as={FaCheck} color="black.800" mr="20px" />
          Creative concepts from multiple designers
        </ListItem>

        <ListItem>
          <ListIcon as={FaCheck} color="black.800" mr="20px" />
          Choose a winning design and receive copyright to the files
        </ListItem>

        <ListItem>
          <ListIcon as={FaCheck} color="black.800" mr="20px" />
          Work with the winning designer to finalize deliverables in your bundle
        </ListItem>
      </List>

      <Flex align="center">
        <Text
          textDecoration="underline"
          textDecorationColor="gray.100"
          _hover={{ textDecorationColor: 'black.800' }}
          transition="0.3s"
        >
          Find out more
        </Text>
        <FaChevronRight />
      </Flex>

      <Image
        src={CollaborationMethodContext}
        alt="Collaboration image"
        w={['100px', '170px']}
        position="absolute"
        bottom={['-25px', '0']}
        right="0"
      />
    </Flex>
  )
}
