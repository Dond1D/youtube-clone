import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';
import { CheckCircle } from '@mui/icons-material';

const ChannelCard = ({ channelDetail, marginTop }) => (
  <Box sx={{
    boxShadow: 'none',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: {
      xs: '100%', // 0px - 600px
      sm: '358px', // 600px - 960px
      md: '320px' // 960px dhe më tej
    },
    height: '326px',
    margin: marginTop ? 'auto' : '10px',
    marginTop: marginTop
  }}>
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff'
      }}>
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{
            borderRadius: '50%',
            height: '180px',
            width: {
              xs: '180px', // 0px - 600px
              sm: '180px', // 600px - 960px
              md: '180px' // 960px dhe më tej
            },
            mb: 2,
            border: '1px solid #e3e3e3'
          }}
        />
        <Typography variant="h6">
          {channelDetail?.snippet?.title}
          <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
