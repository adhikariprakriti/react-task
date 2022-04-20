import {useState} from 'react'
import {Flex} from '@chakra-ui/react'
import TableHeader from './TableHeader'
import TableData from './TableData'

type tableDataProps={
    searchTerm:String,
    data:{
        users:
            {
               data:[
                  { id:string,
                   name:string,
                   username:string,
                   address:
                   {
                       street:string,
                   },
                   email:string,
                   website:any,
                   phone:string,
                  }
                ]

            }
    }}

const Table=({searchTerm,data}:tableDataProps)=>{
    const[checked,setChecked]=useState(false)
    const handleCheckbox=(e:any)=>{
        setChecked(!checked)
    }


    const result=data.users.data.filter((user)=>{
        if(searchTerm==""){
        return user
        }else if(user.username.toLowerCase().includes(searchTerm.toLowerCase())){
        return user
        }
     })


   return(
    <>
    <Flex direction="column" mb="4">
        <TableHeader checked={checked} handleCheckbox={handleCheckbox}/>
        {
            result.map((user,id:number)=>{
                return(
                    <div key={id}>
                    <TableData checked={checked} name={user.name} username={user.username} address={user.address.street} email={user.email} website={user.website} phone={user.phone}/>
                    </div>
                )
            })
        }

        
    </Flex>
    </>

   )
}
export default Table