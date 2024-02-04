import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { demoChannelTitle, demoThumbnailUrl, demoVideoUrl } from '../utils/constant';

const Videocard = ( { video } ) => {
  
  return (
    <Card sx={{ width:{sm:"100%", md:"100%"} , background:"#000", boxShadow:"0"}}> 
        <Link to={`/video/${video?.id?.videoId}`}>
            <CardMedia image={video?.snippet?.thumbnails?.high?.url}
            sx={{ width:"auto", height:{xs:'220px', sm:"250px", md:"200px"} }} />
        </Link>
       
        <CardContent sx={{padding:"5px", height:"60px"}}>
            <Link to={`/video/${video?.id?.videoId}`} >
                <Typography variant='subtitle2' color={"#fff"}>
                    {video?.snippet?.title.slice(0,60)}
                </Typography>
            </Link>

            <Link to={`/channel/${video?.snippet?.channelId}`}>
                <Typography variant='subtitle2' color={"#fff"} style={{opacity:0.5, fontSize:'13px'}}>
                    {video?.snippet?.channelTitle}
                </Typography>
            </Link>

        </CardContent>
    </Card>
  )
}

export default Videocard
