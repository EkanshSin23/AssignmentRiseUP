import Stack from '@mui/material/Stack';
import { Box, Divider, Typography } from '@mui/material';
import MiddleSection from './components/MiddleSection';


//search
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import Tags from './components/Tags';


function App() {

const [searchQuery,setSearchQuery]=React.useState('')

  return (
    <Box style={{
      width:"100% !important"
      ,position:'relative'
     
    }} >
       <Stack  width="100%" height="100vh"  alignItems='center'   sx={{
      }}> 
      <Box sx={{position:'fixed',zIndex:9,bgcolor:'white',width:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',borderBottom:'1px solid gray'}}>

     
      <Box sx={{width:"100%"}}> 
<Typography variant='h3' gutterBottom sx={{textAlign:'center', fontWeight:'bold' }}>LOGO</Typography>
      </Box>
      

<div>
<Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center',justifyContent:'center', width: 400,bgcolor:'rgba(236,236,236,0.5)', marginBottom:'10px' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Images...."
        inputProps={{ 'aria-label': 'search google maps',
 }}
 onChange={(e)=>setSearchQuery(e.target.value)}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
</div>
<Tags/>

<Divider width='100%' mt={2}  />
</Box>

<MiddleSection query={searchQuery} />
      </Stack> 
     
    </Box>
  );
}

export default App;
