import { List, ListItem, ListIcon } from '@chakra-ui/react'
import { FaCheck } from 'react-icons/fa'

export function ProductIncludeList() {
  return (
    <List spacing={3}>
      <ListItem>
        <ListIcon as={FaCheck} color="black.800" mr="20px" />1 finished, completely custom
        logo design
      </ListItem>

      <ListItem>
        <ListIcon as={FaCheck} color="black.800" mr="20px" />1 business card design
      </ListItem>

      <ListItem>
        <ListIcon as={FaCheck} color="black.800" mr="20px" />1 letterhead logo design
      </ListItem>

      <ListItem>
        <ListIcon as={FaCheck} color="black.800" mr="20px" />1 envelope
      </ListItem>

      <ListItem>
        <ListIcon as={FaCheck} color="black.800" mr="20px" />1 Facebook cover logo design
      </ListItem>

      <ListItem>
        <ListIcon as={FaCheck} color="black.800" mr="20px" />
        Full copyright ownership
      </ListItem>

      <ListItem>
        <ListIcon as={FaCheck} color="black.800" mr="20px" />
        Digital print and web files (RGB, CMYK, PNG, JPG, PDF)
      </ListItem>

      <ListItem>
        <ListIcon as={FaCheck} color="black.800" mr="20px" />
        The original, editable file (i.e. AI)
      </ListItem>

      <ListItem>
        <ListIcon as={FaCheck} color="black.800" mr="20px" />
        100% money back guarantee
      </ListItem>
    </List>
  )
}
