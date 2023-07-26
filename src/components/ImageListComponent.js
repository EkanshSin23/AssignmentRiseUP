import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import axios from 'axios';
import { Pagination, Typography } from '@mui/material';

import { FallingLines } from 'react-loader-spinner'
import { MagnifyingGlass } from 'react-loader-spinner'

export default function ImageListComponent({query}) {
  const [isShown, setIsShown] = React.useState(false);
  const [hoverID, setHoverId] = React.useState('');
const [imageData,setImageData]=React.useState([]);
const [page, setPage] = React.useState(1);
const [loading, setLoading] = React.useState(false);
  const handleChange = (event, value) => {
    setPage(value);
  };
  React.useEffect(()=>{
    const fetch=async()=>{
      setLoading(true)
 const res= await axios.get(`https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=qbohmdivuBxIoYgcrBdaCC9gPMnSW8WBGcdk__omYv4`)
// console.log(res.data)    
setImageData(res.data.results)
setTimeout(()=>{
  if(imageData?.length==0){
    setLoading(false)
  }else{
  setLoading(false)}
},500)


}
    fetch();
  },[query,page])
  return (<>
  {loading? (<><Box sx={{width:'100%',height:'500px',display:'flex',justifyContent:'center',alignItems:'center'}}><FallingLines
  color="#4fa94d"
  width="100"
  visible={true}
  ariaLabel='falling-lines-loading'
/></Box></>):( <Box sx={{ width: '100%', height: '100%',padding:'0',display:'flex',justifyContent:'center',flexDirection:'column' }}>
  
      <ImageList cols={4} gap={8}>
        {imageData.length>0&&imageData.map((item) => (
          <ImageListItem key={item?.id} 
          onMouseEnter={() => {setIsShown(true)
            setHoverId(item?.id)}}
      onMouseLeave={() =>{setIsShown(false)
        setHoverId('')}}
         sx={{position:'relative',overflow:'hidden',cursor:'pointer',margin:'10px',borderRadius:'4px'}}
          >
            <img
           src={item.urls?.regular}
              // src={`${imageData[0]?.urls?.full}?w=260&fit=crop&auto=format`}
              // src={`${item.img}?w=260&fit=crop&auto=format`}
              // srcSet={`${item.img}?w=260&fit=crop&auto=format&dpr=2 2x`}
              alt={item?.alt_description}
              loading="lazy"
              
            />
            {isShown && hoverID==item?.id &&(
        <Box sx={{position:'absolute',height :'100px',width:'200px',bgcolor:'rgba(236, 236, 236,0.8)',bottom:'0',right:0,cursor:'pointer',borderRadius:'10px 0px 0 0',padding:'10px',transition:'all 2s',textTransform:'capitalize',display:'flex',justifyContent:'center'}}>
         {item?.alt_description}
        </Box >
      )}

     
          </ImageListItem>
        ))}
      </ImageList>
     
      {imageData?.length==0 && !query && <Box sx={{width:'100%',height:'500px',display:'flex',justifyContent:'center',alignItems:'center'}}><Typography variant='h3' sx={{}}>Search For Something...</Typography> <MagnifyingGlass
  visible={true}
  height="80"
  width="80"
  ariaLabel="MagnifyingGlass-loading"
  wrapperStyle={{}}
  wrapperClass="MagnifyingGlass-wrapper"
  glassColor = '#c0efff'
  color = '#e15b64'
/></Box>}
{imageData?.length==0 && query &&<Box sx={{width:'100%',height:'500px',display:'flex',justifyContent:'center',alignItems:'center'}}><Typography variant='h3' sx={{}}>No Results Found For <b>{query}</b></Typography></Box>}
      {imageData?.length!==0&&<Pagination count={10} page={page} onChange={handleChange} sx={{paddingBottom:'10px',display:'flex',alignSelf:'center'}}/>}
    </Box>)}</>
  );
}

