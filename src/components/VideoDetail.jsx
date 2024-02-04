import { Params, Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { CheckCircle } from '@mui/icons-material';
import Videobox from "./Videobox";
import { FetchFromApi } from "../utils/FetchFromApi";
import { Opacity } from "@mui/icons-material";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const VideoDetail = () => {

    const { id } = useParams();

    const [ Videos, setVideos ] = useState(null);
    const [ VideoDetail, setVideoDetail ] = useState(null);

    useEffect( ()=> {
        FetchFromApi(`videos?part=snippet,statistics&id=${id}`)
        .then((data)=> setVideoDetail(data.items[0]));

        FetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
        .then((data)=> setVideos(data.items))

    }, [id])
   
  return (
    <Box minHeight={"80vh"} sx={{background:"#000"}}>
        <Stack sx={{flexDirection:{sm:"column", md:"row"}}}>
            <Box  flex={1} px={2}>
            <Box sx={{width:'100%', position:'sticky', top: '75px'}}>
                <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
                className="react-player" controls width={"100%"}  height={"60vh"} />
                <Box py={1}>
                    <Typography variant="subtitle1" color={"#fff"} fontWeight={"bold"}>
                        {VideoDetail?.snippet?.title}
                    </Typography>
                </Box>
                <Stack direction={"row"} justifyContent={"space-between"} >
                <Box  alignItems={"center"}>
                    <Link to={`/channel/${VideoDetail?.snippet?.channelId}`}>
                    <Typography variant="subtitle1" color={"#fff"} fontWeight={"bold"} fontSize={"13px"} sx={{opacity:0.6, display:"flex", alignItems:"center"}}>
                        {VideoDetail?.snippet?.channelTitle} <CheckCircle  sx={{fontSize:'18px', color:'gray', ml:'5px'}} />
                    </Typography>
                    </Link>
                </Box>
                <Box  alignItems={"center"} display={"flex"} flexDirection={"row"} gap={2}>
                    <Typography variant="subtitle1" fontWeight={"bold"} color={"#fff"} fontSize={"13px"} sx={{opacity:0.6, display:"flex", alignItems:"center"}}>
                       <RemoveRedEyeIcon sx={{fontSize:'18px', color:'gray', mr:'5px'}}/> {parseInt(VideoDetail?.statistics?.viewCount).toLocaleString()} 
                    </Typography>
                    <Typography variant="subtitle1" fontWeight={"bold"} color={"#fff"} fontSize={"13px"} sx={{opacity:0.6, display:"flex", alignItems:"center"}}>
                       <ThumbUpIcon sx={{fontSize:'18px', color:'gray', mr:'5px'}}/> {parseInt(VideoDetail?.statistics?.likeCount).toLocaleString()} 
                    </Typography>
                </Box>
                </Stack>
            </Box>
            </Box>
            <Box py={1} justifyContent={"center"} alignItems={"center"} width={{sm:"100%", md:"25%"}}>
                <Videobox videos={Videos}/>
            </Box>
        </Stack>
            

    </Box>
    
  )
}

export default VideoDetail
