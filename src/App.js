import Stack from '@mui/material/Stack';
import CustomizedInputBase from './components/SearchBar';
import { Box, Divider, Typography } from '@mui/material';
import Tags from './components/Tags';
function App() {
  return (
    <Box style={{
      width:"100% !important",
     
    }} >
       <Stack  width="100%" height="100vh"  alignItems='center' mt={2} > 
      <Box sx={{width:"100%"}}> 
<Typography variant='h3' gutterBottom sx={{textAlign:'center', fontWeight:'bold' }}>LOGO</Typography>
      </Box>
      
<CustomizedInputBase/>
<Tags/>
<Divider width='100%' mt={2}  />
      </Stack> 
     
    </Box>
  );
}

export default App;
