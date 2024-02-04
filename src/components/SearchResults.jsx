import { useParams } from "react-router-dom"
import { Box, Typography } from '@mui/material';
import Videobox from "./Videobox";
import {useState, useEffect } from "react";
import { FetchFromApi } from "../utils/FetchFromApi";

const SearchResults = () => {

const searchterm = useParams();
const [ Videos, setVideos ] = useState(null);

useEffect(()=>{
    FetchFromApi(`search?part=snippet&q=${searchterm.searchterm}`)
    .then((data)=>setVideos(data.items));
},[searchterm])


  return (
    
    <Box minHeight={"95vh"} sx={{background:"#000"}}>
         <Typography px={2} variant="h6" fontWeight='bold' mb={1} sx={{color: '#fff'}}> 
    Searh Results For: <span style={{color:'#f31503'}}>{searchterm.searchterm}</span> Videos
    </Typography>
        <Videobox videos={Videos} />
    </Box>
  )
}

export default SearchResults
