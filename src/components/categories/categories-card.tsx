import { Flex, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { HorizontalCategoryCard } from './horizontal-category-card'
import { VerticalCategoryCard } from './vertical-category-card'
import { Divider } from './divider'
import BrandImage from '../../assets/brand.jpg'

export function CategoriesCard() {
  return (
    <Flex direction={['column', 'row']} wrap="wrap" maxW="945px">
      <Link to="/details">
        <HorizontalCategoryCard
          title="Logo & brand identity pack"
          price="599"
          discount={39}
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          includes={['Logo', 'Business card', 'Letterhead & Envelope', 'Facebook cover']}
          isMostPopular={true}
        />
      </Link>

      <Divider border="borderLeft" />

      <VerticalCategoryCard
        title="Logo design"
        price="299"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
      />

      <Divider border="borderLeft" />

      <VerticalCategoryCard
        title="Business card"
        price="169"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
      />

      <Divider border="borderBottom" />

      <HorizontalCategoryCard
        title="Logo & brand guide"
        price="449"
        discount={49}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident et beatae magni enim reiciendis cumque."
        includes={['Logo', 'Brand guide document']}
      />

      <Divider border="borderLeft" />

      <HorizontalCategoryCard
        title="Logo & business card"
        price="139"
        discount={300}
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        includes={['Logo', 'Business card']}
      />

      <Divider border="borderBottom" />

      <Flex direction="column">
        <HorizontalCategoryCard
          title="Logo & website"
          price="1,399"
          discount={300}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident et beatae magni enim reiciendis cumque."
          includes={[
            'Logo',
            'Fully functioning, custom-designed, Squarespace website',
            'Content uploaded for you',
          ]}
        />

        <Divider border="borderBottom" />

        <HorizontalCategoryCard
          title="Logo & social media pack"
          price="399"
          discount={137}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident et beatae magni enim reiciendis cumque."
          includes={['Logo', 'Facebook cover', 'Twitch header', 'YouTube background']}
        />

        <Divider border="borderBottom" />
      </Flex>

      <Image
        src={BrandImage}
        objectFit="cover"
        alt="Branding image"
        w={['370px', '470px']}
      />

      <Flex direction={['column', 'row']}>
        <VerticalCategoryCard
          title="Brand guide"
          price="299"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident et beatae magni enim reiciendis cumque."
        />

        <Divider border="borderLeft" />

        <VerticalCategoryCard
          title="Stationery"
          price="199"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident et beatae magni enim reiciendis cumque."
        />

        <Divider border="borderLeft" />

        <HorizontalCategoryCard
          title="Full-Service Brand Pack"
          price="3,999"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident et beatae magni enim reiciendis cumque."
        />
      </Flex>

      <Divider border="borderBottom" />
    </Flex>
  )
}
