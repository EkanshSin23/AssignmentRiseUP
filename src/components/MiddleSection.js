import {  Stack, Typography } from '@mui/material'
import React from 'react'
import ImageListComponent from './ImageListComponent'

const MiddleSection = ({query}) => {
  return (

    <Stack sx={{width:'100%',height:'100%', marginTop:'200px',zIndex:0}}>
     
   {query && <Typography sx={{textAlign:'center',textTransform:'capitalize'}}>
   Search Results for  {query}
   </Typography>
 }

<Stack>
<ImageListComponent query={query}/>
</Stack>

    </Stack>
  )
}

export default MiddleSection
