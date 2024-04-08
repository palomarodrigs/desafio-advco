import { Flex } from '@chakra-ui/layout'
import { Header } from '../components/header'
import { ProductSlide } from '../components/product-slide'
import { Heading, Text } from '@chakra-ui/react'
import { ProductInfo } from '../components/product-info'
import { SelectPackage } from '../components/select-package'

export function Details() {
  return (
    <Flex direction="column">
      <Header />

      <Flex justify={['flex-start', 'space-between']} p={['20px', '60px']}>
        <Flex direction="column" gap="40px">
          <ProductSlide />

          <Flex display={{ base: 'flex', lg: 'none' }} direction="column" gap="24px">
            <Heading fontSize="24px">Logo & brand identity pack</Heading>

            <Text
              fontFamily="Graphik Medium, sans-serif"
              fontSize="16px"
              fontWeight="700"
            >
              Starting from $599
            </Text>

            <Flex direction="column" gap="12px">
              <Heading fontSize="19px">Branding as unique as your business.</Heading>
              <Text>
                Invite our professional designers to bring your brand to life through
                custom logo design, business cards, letterhead and social media graphics.
              </Text>
            </Flex>
          </Flex>

          <ProductInfo />
        </Flex>

        <SelectPackage />
      </Flex>
    </Flex>
  )
}
