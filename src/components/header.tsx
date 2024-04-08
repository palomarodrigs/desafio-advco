import { Flex, Heading } from '@chakra-ui/layout'
import { BurgerMenu } from './burger-menu'
import { Link } from 'react-router-dom'
import { FaPhoneAlt } from 'react-icons/fa'

export function Header() {
  return (
    <Flex
      align="center"
      justify="space-between"
      w="full"
      py={['15px', '30px']}
      px={['20px', '60px']}
    >
      <BurgerMenu />

      <Link to="/">
        <Heading fontSize="24px">99Designs</Heading>
      </Link>

      <Flex display={{ base: 'none', lg: 'flex' }} gap="15px">
        <Link to="">Categories</Link>
        <Link to="">How it works</Link>
        <Link to="">Find a designer</Link>
        <Link to="">Inspiration</Link>
        <Link to="">Studio</Link>
      </Flex>

      <Flex gap="15px">
        <Flex display={{ base: 'none', lg: 'flex' }} align="center" gap="5px">
          <FaPhoneAlt />
          <Link to="">+1 877 834 4534</Link>
        </Flex>

        <Link to="">Log in</Link>
      </Flex>
    </Flex>
  )
}
