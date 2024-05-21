import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return 'Loading...';

  return (
    <Stack direction={direction || 'row'} flexWrap="wrap"
      sx={{ justifyContent: 'center', width: '100%' }}>
      {videos.map((item, idx) => (
        <Box key={idx} sx={{  margin: item.id.video ? '10px' : '0px',display: {sm:'flex'}, justifyContent: 'center' }}>
          {item.id.videoId && (<VideoCard video={item} />)}
          {item.id.channelId && (<ChannelCard channelDetail={item} />)}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos;