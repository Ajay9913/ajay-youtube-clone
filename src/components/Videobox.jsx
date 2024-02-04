import { Stack, Box } from "@mui/material";
import Videocard from "./Videocard";

const Videobox = ({videos}) => {

if(!videos) return 'Loading...';

  return (
    <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"start"} gap={1} p={2}>

        { videos.map( (item, idx )=> (
            <Box key={idx} flex={"1 0 300px"}>
                { <Videocard video={item}/> }
            </Box>
        ))}

    </Stack>
  )
}

export default Videobox
