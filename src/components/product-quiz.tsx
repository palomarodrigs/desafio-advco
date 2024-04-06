import { Button } from '@chakra-ui/button'
import { Flex, Heading, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import DesignBrand from '../assets/design-brand.svg'

export function ProductQuiz() {
  return (
    <Flex
      direction={['column', 'row']}
      maxW={['370px', '945px']}
      bg="white.300"
      borderRadius="md"
    >
      <Flex
        direction="column"
        align={['center', 'flex-start']}
        textAlign={['center', 'left']}
        gap="20px"
        p={['20px', '45px']}
      >
        <Heading fontSize={['24px', '32px']}>
          Find the right brand solution for you
        </Heading>

        <Text>
          Answer a few simple questions about your business and we'll recommend a design
          solution that's right for you.
        </Text>

        <Button
          bg="black.800"
          borderRadius="full"
          p="30px"
          maxW="265px"
          _hover={{ opacity: 0.8 }}
          transition="opacity 0.5s"
        >
          <Text fontSize="19px" color="white.100">
            Take the branding quiz
          </Text>
        </Button>
      </Flex>

      <Image src={DesignBrand} w="400px" h="300px" />
    </Flex>
  )
}
