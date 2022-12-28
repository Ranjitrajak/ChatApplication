import { Box,styled } from '@mui/material'
import React,{useContext} from 'react'
import ChatIcon from '@mui/icons-material/Chat';

import { AccountContext } from '../../../context/AccountProvider'
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/InfoDrawer';
import { useState } from 'react';

const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;

const Wrapper = styled(Box) `
    margin-left: auto;
    & > * {
        margin-left: 2px;
        padding: 8px;
        color: #000;
    };
    & :first-child {
        font-size: 22px;
        margin-right: 8px;
        margin-top: 3px;
    }
`;

const Image = styled('img') ({
    height: 40,
    width: 40,
    borderRadius: '50%'
})

const Header = () => {
    const {account}=useContext(AccountContext)

    const [openDrawer,setDrawer]=useState(false)
    const toggleDrawer = () => {
        setDrawer(true);
    }
  return (
    <>
    <Component>
    <Image src={account.picture} alt="dp"  onClick={() => toggleDrawer()}/>
    <Wrapper>
    <ChatIcon/>
     <HeaderMenu />
    </Wrapper>
   </Component>
   <InfoDrawer open={openDrawer} setDrawer={setDrawer} profile={true}/>
    
        
    
    </>
  )
}

export default Header