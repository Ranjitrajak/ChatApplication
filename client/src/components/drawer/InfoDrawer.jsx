import React from 'react'
import Drawer from '@mui/material/Drawer';
import { ArrowBack } from '@mui/icons-material';
import { Box,styled,Typography } from '@mui/material';
import Profile from './Profile';

const Header = styled(Box)`
  background: #008069;
  height: 107px;
  color: #FFFFFF;
  display: flex;
  & > svg, & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
`;

const Component = styled(Box)`
  background: #ededed;
  height: 85%;
`;

const Text = styled(Typography)`
    font-size: 18px;
`

const drawerStyle = {
    left: 20,
    top: 17,
    height: '95%',
    width: '30%',
    boxShadow: 'none'
}

const InfoDrawer = ({ open,  setDrawer,profile}) => {

  const handleClose = () => {
    setDrawer(false);
};
  return (
    <Drawer
    open={open}
    onClose={handleClose}
    PaperProps={{ sx: drawerStyle }}
    style={{ zIndex: 1500 }}
>
    <Header>
        <ArrowBack onClick={() =>  setDrawer(false)} />
        <Text>Profile</Text>
    </Header>
    <Component>
      { profile &&<Profile />}
    </Component>
</Drawer>
  )
}

export default InfoDrawer