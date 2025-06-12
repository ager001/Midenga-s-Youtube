import React from 'react'
import './PlayVideo.css';
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';   
import save from '../../assets/save.png';
import user_profile from '../../assets/user_profile.jpg';
import jack from '../../assets/jack.png';

const PlayVideo = () => {
  return (
    <div className='play-video'>
      <video src={video1} controls autoPlay muted></video>
      <h3>Best Youtube Chanel To learn Web Development</h3>
       <div className="play-videoinfo">
         <p>153334 views &bull; 2 days ago</p>
          <div>
           <span><img src={like} alt="" />3450</span>
           <span><img src={dislike} alt="" />34</span>
           <span><img src={share} alt="" />Share</span>
           <span><img src={save} alt="" />Save</span>
        </div>
       
       </div>
        
        <hr/>
        <div className="publisher">
          <img src={jack} alt="" />
          <div className="publisher-info">
            <p>Obizee</p>
            <span>10M Subscribers</span>
          </div>
          <button>Subscribe</button>
        </div>
        <div className="vid-description">
          <p>Chanel that makes learning Easy</p>
          <p>Subsribe Obizee to Watch More Tutorials on Web Development</p>
          <hr/>
          <h4>150 Comments</h4>
          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>Omondi Wanjiru <span>1 day ago</span></h3>
              <p>A great channel for learning coding tutorials </p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>233</span>
                <img src={dislike} alt="" />
              </div>
            </div>
          </div>
          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>Omondi Wanjiru <span>1 day ago</span></h3>
              <p>A great channel for learning coding tutorials </p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>233</span>
                <img src={dislike} alt="" />
              </div>
            </div>
          </div>
          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>Omondi Wanjiru <span>1 day ago</span></h3>
              <p>A great channel for learning coding tutorials </p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>233</span>
                <img src={dislike} alt="" />
              </div>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default PlayVideo
