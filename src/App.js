import Stack from '@mui/material/Stack';
import CustomizedInputBase from './components/SearchBar';
import { Box, Divider, Typography } from '@mui/material';
import Tags from './components/Tags';
import MiddleSection from './components/MiddleSection';
function App() {
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
      
<CustomizedInputBase/>
<Tags/>
<Divider width='100%' mt={2}  />
</Box>

<MiddleSection/>
      </Stack> 
     
    </Box>
  );
}

export default App;
