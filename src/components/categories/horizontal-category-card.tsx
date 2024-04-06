import { Flex, Heading, Text } from '@chakra-ui/react'
import { Badge } from './badge'
import { PricingSave } from './pricing-save'
import { CheckIcon, StarIcon } from '@chakra-ui/icons'

interface HorizontalCategoryCardProps {
  title: string
  price: string
  discount?: number
  description: string
  includes?: string[]
  isMostPopular?: boolean
}

export function HorizontalCategoryCard({
  title,
  price,
  discount,
  description,
  includes,
  isMostPopular = false,
}: HorizontalCategoryCardProps) {
  return (
    <Flex
      direction="column"
      gap="15px"
      p="30px"
      w={['370px', '470px']}
      borderBottom={{ base: '1px solid', md: 'none' }}
      borderColor="gray.100"
      _hover={{ transform: 'scale(1.03)', boxShadow: 'lg' }}
      transition="transform 0.5s"
      role="group"
    >
      {isMostPopular && <Badge />}

      <Flex align="center" gap="10px">
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

            {discount && <PricingSave>{discount}%+</PricingSave>}
          </Flex>
        </Flex>
      </Flex>

      <Flex direction="column" gap="10px" color="gray.500" fontSize="14px">
        <Text whiteSpace="wrap">{description}</Text>

        {includes?.map((include, index) => (
          <Flex key={index} align="center" gap="5px">
            <CheckIcon color="black.800" />

            <Text whiteSpace={['wrap', 'nowrap']}>{include}</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}
