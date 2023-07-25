import { Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import ImageListComponent from './ImageListComponent'

const MiddleSection = () => {
  return (

    <Stack sx={{width:'100%',height:'100%', marginTop:'200px',zIndex:0}}>
     
   <Typography sx={{textAlign:'center'}}>
    Animals
   </Typography>
 

<Stack>
<ImageListComponent/>
</Stack>

    </Stack>
  )
}

export default MiddleSection
