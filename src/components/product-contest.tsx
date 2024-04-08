import { Flex, Heading, Image, Text } from '@chakra-ui/react'

interface ProductContestProps {
  src: string
  contest: number
  description: string
}

export function ProductContest({ src, contest, description }: ProductContestProps) {
  return (
    <Flex display={{ base: 'none', lg: 'flex' }} direction="column" align="center">
      <Image src={src} alt="Contest image" w="180px" />

      <Flex direction="column">
        <Heading fontSize="16px">0{contest}.</Heading>
        <Text fontSize="14px" color="gray.300">
          {description}
        </Text>
      </Flex>
    </Flex>
  )
}
