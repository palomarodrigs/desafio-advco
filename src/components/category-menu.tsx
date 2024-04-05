import { Flex, Heading } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { SearchIcon } from '@chakra-ui/icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ButtonCategoryMenu } from './button-category-menu'
import 'swiper/css'

const categories = [
  'Web & app design',
  'Business & advertising',
  'Clothing & merchandise',
  'Art & illustration',
  'Packaging & label',
  'Book & magazine',
]

export function CategoryMenu() {
  return (
    <Flex
      w="100%"
      py={['20px', '40px']}
      pl={['20px', '40px']}
      direction="column"
      gap="15px"
      bgGradient={[
        'white.100',
        'linear-gradient(0deg, rgba(230,230,229,1) 0%, rgba(255,255,255,1) 100%)',
      ]}
      overflowX="hidden"
    >
      <Heading fontSize={['19px', '24px']}>What do you need designed?</Heading>

      <Swiper spaceBetween="15px" slidesPerView="auto" style={{ paddingBottom: '15px' }}>
        <SwiperSlide style={{ width: 'auto' }}>
          <Button
            size="auto"
            py="25px"
            px="30px"
            bg="gray.100"
            color="black.800"
            _hover={{ bg: 'white.100', color: 'black.800', boxShadow: 'lg' }}
          >
            <SearchIcon fontSize="23px" />
          </Button>
        </SwiperSlide>

        <SwiperSlide style={{ width: 'auto' }}>
          <ButtonCategoryMenu mr="0px" bg="brand.100" color="white.100" disableHover>
            Logo & identity
          </ButtonCategoryMenu>
        </SwiperSlide>

        <SwiperSlide style={{ width: 'auto' }}>
          {categories.map((category, index) => (
            <ButtonCategoryMenu key={index}>{category}</ButtonCategoryMenu>
          ))}
        </SwiperSlide>
      </Swiper>
    </Flex>
  )
}
