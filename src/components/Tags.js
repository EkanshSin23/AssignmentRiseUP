import { Chip, Stack } from '@mui/material'
import React from 'react'

const Tags = () => {

    const handleClick = (e) => {
        console.info('You clicked the Chip.');
        console.log(e);
      };
    

  return (
    <Stack direction="row" spacing={1} mb={2}>
    <Chip label="Extra Soft" onClick={(e)=>handleClick(e)}  />
    <Chip label="Soft"  onClick={(e)=>handleClick(e)}/>
    <Chip label="Medium" onClick={(e)=>handleClick(e)}/>
    <Chip label="Hard"  onClick={(e)=>handleClick(e)}/>
  </Stack>
  )
}

export default Tags
