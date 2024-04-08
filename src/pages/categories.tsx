import { Flex } from '@chakra-ui/layout'
import { CategoryMenu } from '../components/category-menu'
import { CategoriesCard } from '../components/categories-card'
import { ProductQuiz } from '../components/product-quiz'

export function Categories() {
  return (
    <Flex direction="column" align="center">
      <CategoryMenu />

      <Flex direction="column" gap="50px" py={['30px', '60px']}>
        <CategoriesCard />
        <ProductQuiz />
      </Flex>
    </Flex>
  )
}
