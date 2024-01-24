import React from 'react'
import '../components/Header.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import pfp from '../image/pfp.jpg'
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
function Header() {
  return (
    <div className='main' >
      <div className='first_main' >
        <div className='file_1' >MySpace</div>
          <div className='file_2'>
            
          <Button className='b1' variant="contained">Home</Button>
          <Button className='b1' variant="contained">Music</Button>
          <Button className='b1' variant="contained">Video</Button>
          
          </div>
        <div className='search' > 
        <SearchIcon></SearchIcon>
        <input type="text" placeholder="Search.."/>
        </div>
        <div className='pfp' >
        <Stack direction="row" spacing={2}>
          <Avatar alt="Remy Sharp" src={pfp} sx={{ width: 44, height: 44 }} />
        </Stack>
        </div>
      </div>
    </div>
  )
}

export default Header
