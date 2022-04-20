import {Checkbox,Flex,Box} from '@chakra-ui/react'

type dataprops={
   checked:boolean,
   name:string,
   phone:string,
   username:string,
   email:string,
   website:any,
   address:string
}

const TableData=({checked,name,address,phone,website,email,username}:dataprops)=>{
    const smallWidth="4%";
    const mediumWidth="12%";
    const largeWidth="15%"

    return(
        <>       
        <Flex  w="100%"  p="4" justify="space-between" flexWrap="wrap"  alignItems="center"  >
        <Box w={smallWidth}  ><Checkbox verticalAlign="center" isChecked={checked}  isReadOnly  /></Box>
        <Box w={mediumWidth} fontWeight="400" fontSize="14px" lineHeight="24px" >{name}</Box>
        <Box w={mediumWidth} fontWeight="400" fontSize="14px" lineHeight="24px" >{username}</Box>
        <Box w={largeWidth}  fontWeight="400" fontSize="14px" lineHeight="24px">{email}</Box>
        <Box w={largeWidth}  fontWeight="400" fontSize="14px" lineHeight="24px" >{phone}</Box>
        <Box w={largeWidth}  fontWeight="400" fontSize="14px" lineHeight="24px">{website}</Box>
        <Box w={largeWidth}  fontWeight="400" fontSize="14px" lineHeight="24px">{address}</Box>
      </Flex>
            <hr/>
            </>


)
}
export default TableData