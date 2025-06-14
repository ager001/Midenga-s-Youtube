import React from 'react'
import PlayVideo from '../../Components/Play Video/PlayVideo'
import './video.css';
import Recommended from '../../Components/Recommended/Recommended';
const Video = () => {
  return (
    <div className='play-container'>
      <PlayVideo/>
      <Recommended/>
      
    </div>
  )
}

export default Video
