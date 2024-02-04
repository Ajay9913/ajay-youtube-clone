import { Stack, Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Videobox from './Videobox';
import { FetchFromApi } from '../utils/FetchFromApi';



const Feed = () => {


const [selectedCat, setselectedCat] = useState('All');
const [Videos, setVideos] = useState([]);

useEffect( () => {

    FetchFromApi(`search?part=snippet&q=${selectedCat}`)
    .then((data)=> setVideos(data.items));

},[selectedCat]);

//console.log(Videos);

  return (
    <Stack direction={{sm:"column", md:"row"}}>
        <Box height={{sm:"auto",md:"92vh"}} sx={{ background:"#000"}}>
            <Sidebar selectedCat={selectedCat} setselectedCat={setselectedCat}/>
        </Box>

        <Box height={"92vh"} display={"flex"} sx={{ background:"#000", overflowY:"auto"}}> 
            <Videobox videos={Videos}/>

        </Box>

    </Stack>
  )
}

export default Feed
