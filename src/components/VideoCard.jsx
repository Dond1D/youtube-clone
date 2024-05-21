import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from '../utils/constants'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
import { useTheme } from '../context/ThemeContext'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

  const { themeMode } = useTheme();
    return (
      <Card sx={{
        width: {
          xs: '100%', // 0px - 600px
          // sm: '358px', // 600px - 960px
          md: '320px' // 960px dhe më tej
        },
        boxShadow: 'none',
        borderRadius: 0,
        margin: {xs: '10px 0px',sm:'10px', md:'10px', lg: '10px'},
        backgroundColor: themeMode === 'light' ? 'white' : 'black'
      }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <CardMedia
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{
              width: {
                xs: '100%', // 0px - 600px
                sm: '320px', // 600px - 960px
                md: '320px' // 960px dhe më tej
              },
              height: 180
            }}
          />
          <CardContent sx={{
            // backgroundColor: themeMode === 'light' ? 'white' : '#1e1e1e',
            height: '106px',
            width: '320px'
          }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
              <Typography variant='subtitle1' fontWeight="bold" sx={{color: themeMode === 'light' ? 'black' : 'white'}}>
                {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
              </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
              <Typography variant='subtitle2' fontWeight="bold" color="gray">
                {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
                <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
              </Typography>
            </Link>
          </CardContent>
        </Link>
      </Card>
    )
  }
  
  export default VideoCard;