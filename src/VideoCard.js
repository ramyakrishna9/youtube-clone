import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import './VideoCard.css';

function VideoCard({image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className="videocard">
      <img className="videocard__thumbnail"src={image} alt="" />
      <div className="videocard__info">
          <Avatar className="videocard__avatar" alt={channel} src={channelImage} />

      
            <div className="video__text">
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>
                    {views} . {timestamp}
                </p>
            </div>
       </div>    
    </div>
  );
}

export default VideoCard;