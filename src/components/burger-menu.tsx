import { useRef, useEffect } from 'react'
import { Box, Button, List, ListItem, Text, useDisclosure } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FaBars, FaHome, FaList } from 'react-icons/fa'

export function BurgerMenu() {
  const { isOpen, onToggle, onClose } = useDisclosure()
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const closeMenu = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', closeMenu)
    } else {
      document.removeEventListener('mousedown', closeMenu)
    }

    return () => {
      document.removeEventListener('mousedown', closeMenu)
    }
  }, [isOpen, onClose])

  return (
    <Box display={{ base: 'block', lg: 'none' }}>
      <Button
        variant="outline"
        border="none"
        _hover={{ opacity: 1 }}
        onClick={onToggle}
        p="0px"
        aria-label="Open menu"
      >
        <FaBars fontSize="20px" />
      </Button>

      {isOpen && (
        <Box
          position="fixed"
          left="0"
          top="0"
          right="0"
          bottom="0"
          bg="rgba(0, 0, 0, 0.3)"
          zIndex="98"
          onClick={onClose}
        />
      )}

      <Box
        ref={menuRef}
        position="fixed"
        width="280px"
        left={isOpen ? 0 : '-290px'}
        top="0"
        bottom="0"
        bg="white.100"
        color="white"
        transition="left 0.3s"
        p="15px"
        zIndex="99"
        boxShadow="md"
      >
        <List spacing={2} color="black.800">
          <ListItem>
            <Link to="/">
              <Button
                w="full"
                bg="white.100"
                border="none"
                _hover={{ bg: 'white.300' }}
                transition="0.3s"
                justifyContent="flex-start"
                alignItems="center"
                gap="10px"
              >
                <FaHome />

                <Text>Home</Text>
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link to="/">
              <Button
                w="full"
                bg="white.100"
                border="none"
                _hover={{ bg: 'white.300' }}
                transition="0.3s"
                justifyContent="flex-start"
                alignItems="center"
                gap="10px"
              >
                <FaList />

                <Text>Browse categories</Text>
              </Button>
            </Link>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}
