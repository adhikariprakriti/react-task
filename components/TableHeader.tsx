import {Checkbox,Flex,Box} from '@chakra-ui/react'

interface tableHeaderProps{
    checked:boolean,
    handleCheckbox: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const TableHeader=({checked,handleCheckbox}:tableHeaderProps)=>{
    const smallWidth="4%";
    const mediumWidth="12%";
    const largeWidth="15%"
  
    return (
        <>
                    <Flex w="100%" py="2" px="4" bg="header"  justify="space-between" flexWrap="wrap"  alignItems="center">
                      <Box w={smallWidth} ><Checkbox verticalAlign="center" isChecked={checked}   onChange={handleCheckbox}/></Box>
                      <Box w={mediumWidth} fontSize="16px" fontWeight="500" lineHeight="6" color="hedingtext">Name</Box>
                      <Box w={mediumWidth} fontSize="16px" fontWeight="500" lineHeight="6" color="hedingtext">Username</Box>
                      <Box w={largeWidth} fontSize="16px" fontWeight="500" lineHeight="6" color="hedingtext" >Email</Box>
                     <Box w={largeWidth} fontSize="16px" fontWeight="500" lineHeight="6" color="hedingtext" >Phone</Box>
                     <Box w={largeWidth} fontSize="16px" fontWeight="500" lineHeight="6" color="hedingtext">Website</Box>
                     <Box w={largeWidth} fontSize="16px" fontWeight="500" lineHeight="6" color="hedingtext">Address</Box>
                </Flex>

        </>
    )
}

export default TableHeader
