import { Flex, Heading, Text } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

interface VerticalCategoryCardProps {
  title: string
  price: string
  description: string
}

export function VerticalCategoryCard({
  title,
  price,
  description,
}: VerticalCategoryCardProps) {
  return (
    <Flex
      direction="column"
      gap="15px"
      p="30px"
      w={['370px', '235px']}
      borderBottom={{ base: '1px solid', md: 'none' }}
      borderColor="gray.100"
      _hover={{ transform: 'scale(1.03)', boxShadow: 'lg' }}
      transition="transform 0.5s"
      role="group"
      cursor="pointer"
    >
      <Flex direction="column" gap="10px">
        <StarIcon
          fontSize="50px"
          _groupHover={{ color: 'brand.100' }}
          transition="color 0.5s"
        />

        <Flex direction="column" gap="5px">
          <Heading
            fontSize="19px"
            _groupHover={{ color: 'brand.100' }}
            transition="color 0.5s"
          >
            {title}
          </Heading>

          <Flex align="center" gap="10px">
            <Text>from US${price}</Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex direction="column" gap="10px" color="gray.500" fontSize="14px">
        <Text whiteSpace="wrap">{description}</Text>
      </Flex>
    </Flex>
  )
}
