
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { demoProfilePicture } from '../utils/constant';

const ChannelCard = ( { channeldetail } ) => {
   
  return (

    <Box 
    sx={{
        boxShadow:'none',
        borderRadius:'20px',
        display:'flex',
        justifyContent:"center",
        alignItems: "center",
        width: {xs:'356px', md: '320px'},
        height: '256px',
        margin:'auto',
        marginTop:"-100px"
    }}>
      
        <Link to={channeldetail?.feed == "true" && `/channel/${channeldetail?.id?.channelId}` }>
            <CardContent sx={{ display: "flex", flexDirection:'column', justifyContent:'center', textAlign:'center', color:'#fff'}}>
                <CardMedia 
                 image={channeldetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                 alt={channeldetail?.snippet?.title}
                 sx={{ borderRadius:'50%', height:'180px', width:'180px', mb:2, border:'1px solid #e3e3e3'}}
                 />
                 <Typography variant="h6" color="#000" sx={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                    {channeldetail?.snippet?.title}
                    <CheckCircle sx={{fontsize:12, color:'gray', ml:'5px'}}/>
                 </Typography>

                 {channeldetail?.statistics?.subscriberCount && (
                    <Typography color="#000" sx={{opacity:"0.5"}}>
                        {parseInt(channeldetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                    </Typography>
                 )}
            </CardContent>
         </Link>
    </Box>
  )
}

export default ChannelCard
