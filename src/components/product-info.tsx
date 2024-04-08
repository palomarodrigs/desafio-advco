import { Heading, Text } from '@chakra-ui/layout'
import {
  Box,
  Divider,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  TabPanels,
  Flex,
} from '@chakra-ui/react'
import { ProductIncludeList } from './product-include-list'
import { ProductCollaboration } from './product-collaboration'
import { ProductContest } from './product-contest'
import ContestImage1 from '../assets/contest-1.jpg'
import ContestImage2 from '../assets/contest-2.jpg'
import ContestImage3 from '../assets/contest-3.jpg'

export function ProductInfo() {
  return (
    <Tabs>
      <TabList mb={['30px', '0px']} color="gray.200" borderColor="gray.100">
        <Tab
          fontSize={['16px', '19px']}
          fontWeight={['500', '700']}
          _selected={{ color: 'black.900', borderBottomColor: 'black.900' }}
        >
          What you get
        </Tab>

        <Flex align="center" gap="20px" ml="20px">
          <Box fontSize={['16px', '19px']} fontWeight={['500', '700']} cursor="pointer">
            How it works
          </Box>

          <Box fontSize={['16px', '19px']} fontWeight={['500', '700']} cursor="pointer">
            Pricing
          </Box>

          <Box fontSize={['16px', '19px']} fontWeight={['500', '700']} cursor="pointer">
            FAQs
          </Box>
        </Flex>
      </TabList>

      <Box display={{ base: 'none', lg: 'block' }} mt="30px">
        <Heading fontSize={['24px']} mb="12px">
          Branding as unique as your business.
        </Heading>

        <Text>
          Invite our professional designers to bring your brand to life through custom
          logo design, business cards, letterhead and social media graphics.
        </Text>
      </Box>

      <Divider display={{ base: 'none', lg: 'block' }} my="30px" borderColor="gray.100" />

      <TabPanels>
        <TabPanel>
          <Box mb={['30px', '0px']}>
            <Heading fontSize={['19px', '24px']} mb="24px">
              What you get
            </Heading>

            <ProductIncludeList />
          </Box>

          <Divider
            display={{ base: 'none', lg: 'block' }}
            my="30px"
            borderColor="gray.100"
          />

          <Box mb="60px">
            <Heading fontSize={['19px', '24px']} mb="16px">
              Collaboration method
            </Heading>

            <ProductCollaboration />
          </Box>

          <Box>
            <Heading
              display={{ base: 'none', lg: 'block' }}
              fontSize={['19px', '24px']}
              mb="16px"
            >
              How a contest works
            </Heading>

            <Flex gap="10px">
              <ProductContest
                src={ContestImage1}
                contest={1}
                description="Write a design brief"
              />

              <ProductContest
                src={ContestImage2}
                contest={2}
                description="Designers submit concepts"
              />

              <ProductContest
                src={ContestImage3}
                contest={3}
                description="Pick a winning design"
              />
            </Flex>
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
