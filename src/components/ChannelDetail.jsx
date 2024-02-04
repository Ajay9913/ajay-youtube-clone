import { Params, Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { CheckCircle } from '@mui/icons-material';
import Videobox from "./Videobox";
import { FetchFromApi } from "../utils/FetchFromApi";
import ChannelCard from "./ChannelCard";


const ChannelDetail = () => {

    const { id } = useParams();

    const [ Videos, setVideos ] = useState(null);
    const [ ChannelDetail, setChannelDetail ] = useState(null);

    useEffect( ()=> {
        FetchFromApi(`channels?part=snippet&id=${id}`)
        .then((data)=> setChannelDetail(data.items[0]));

        FetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
        .then((data)=> setVideos(data.items))

    }, [id])
    
  return (
    <Box minHeight={"50vh"} >
            <Box>
                <div style={{
                background:'linear-gradient(to right, #00dbde, #fc00ff)',
                zIndex: 10,
                height:'200px'
                }}/>

                <ChannelCard channeldetail={ChannelDetail}/>
            </Box>
            <Box sx={{background:"#fff"}}>
                <Videobox videos={Videos} />
            </Box>
    </Box>
  )
}

export default ChannelDetail


