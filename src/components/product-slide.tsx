import DesignLogoImage1 from '../assets/design-logo-1.jpg'
import DesignLogoImage2 from '../assets/design-logo-2.jpg'
import { Box, Image, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const images = [DesignLogoImage1, DesignLogoImage2]

export function ProductSlide() {
  return (
    <Box maxW={['370px', '570px']} position="relative">
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          type: 'bullets',
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} style={{ paddingBottom: '50px' }}>
            <Image src={image} alt="Design logo image" />

            {index === 0 && (
              <Box
                position="absolute"
                right="15px"
                top="15px"
                bg="orange.100"
                color="white"
                p="8px"
                fontSize="12px"
              >
                Winner
              </Box>
            )}
          </SwiperSlide>
        ))}

        <Box position="absolute" left="-55px" bottom="0" p="70px">
          <Box className="swiper-pagination" />
        </Box>
      </Swiper>

      <Box
        position="absolute"
        bottom="0"
        right="0"
        color="gray.300"
        fontSize="14px"
        fontFamily="Georgia, sans-serif"
      >
        <Text fontStyle="italic">
          Design contest for{' '}
          <span style={{ textDecoration: 'underline' }}>The Company</span>
        </Text>

        <Text textAlign="end">
          Winning design by <span style={{ textDecoration: 'underline' }}>John Doe</span>
        </Text>
      </Box>
    </Box>
  )
}
