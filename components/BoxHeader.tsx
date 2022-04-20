import {Stack,Button, Spacer,IconButton,InputLeftElement,Input,InputGroup, Heading} from '@chakra-ui/react'
import { SearchIcon,AddIcon} from '@chakra-ui/icons'

type props={
    showInput:boolean,
    content:string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleSearch: () => void;
         
}

const BoxHeader=({showInput,content,handleChange,handleSearch}:props)=>{

    return (
        <>
          <Stack align="center" px="8" py="6" isInline>
            <Heading fontWeight="500" fontSize="1.25rem" color="headertext" lineHeight="1.375rem">Users</Heading>
            <Spacer/>
            <Stack  align="center" isInline >
                  {
                            showInput ?  <InputGroup>
                                    <InputLeftElement pointerEvents='none'children={<SearchIcon color='gray.300' />}/>
                                      <Input type='text' placeholder='Search username' value={content}  onChange={handleChange}/>
                                   </InputGroup>
                           :<IconButton aria-label='Search' bg="white" icon={<SearchIcon w={4} h={4} mr="4"/>} onClick={handleSearch} _hover={{background: "white",}} _active={{background: "white"}} _focus={{outline:"none"}}/>
                    }
               <Button color="white" bg="button" p="4" fontWeight="500" fontSize="md" rounded="md"   _hover={{
    background: "#003043",
  }}  _focus={{outline:"none",
}}  _active={{background: "#003043",}}
><AddIcon w={4} h={4} mr="3" fontWeight="500" fontSize="md"/> New User</Button>
            </Stack>
         </Stack>
        </>
    )
}

export default BoxHeader
