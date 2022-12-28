import { Box ,styled,Divider} from '@mui/material'
import React,{useEffect,useState,useContext} from 'react'
import { getUsers } from '../../../service/api'
import { AccountContext } from '../../../context/AccountProvider'
import Conversation from './Conversation'


const Component = styled(Box)`
    overflow: overlay;
    height: 81vh;
`;
const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: .6;
`;


const Conversations = ({text}) => {

  const[users,setUsers]=useState([])
  const {account,socket,setActiveUsers}=useContext(AccountContext)


  useEffect(()=>{
    const fetchData= async()=>{
      let response=await getUsers()
      let fiteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
      setUsers(fiteredData);


    }
    fetchData()
  },[text])

  useEffect(() => {
    socket.current.emit('addUser', account);
    socket.current.on("getUsers", users => {
        setActiveUsers(users);
    })
}, [account])

  return (
    <Component>
      {
                users && users.map((user, index) => (
                    user.sub !== account.sub && 
                        <>
                            <Conversation user={user} />
                            {
                                users.length !== (index + 1)  && <StyledDivider />
                            }
                        </>
                ))
            }
    </Component>
  )
}

export default Conversations