import { MoreVert } from '@mui/icons-material'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import InfoDrawer from '../../drawer/InfoDrawer';

import React,{useState} from 'react'

const HeaderMenu = ({setDrawer}) => {
    const[open,setOpen]=useState(null)
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    }

    const toggleDrawer = () => {
      setOpenDrawer(true);
  }

  return (
    <>
    <MoreVert onClick={handleClick}/>
    <Menu
        id="basic-menu"
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
      >
        <MenuItem onClick={() => { handleClose(); toggleDrawer()}}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      <InfoDrawer open={openDrawer} setDrawer={setOpenDrawer} profile={true} />
    </>
  )
}

export default HeaderMenu