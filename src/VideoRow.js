import React from 'react';

import './VideoRow.css';

function VideoRow({ title, subs, views, description, timestamp, channel, image }) {
  return (
    <div className="videorow">
        <img src={image} alt="" />
        <div className="videorow__text">
           <h3>{title}</h3>
           <p className="videorow__headline">
               {channel}.<span className="videorow__subs"> <span className="videorow__subsnumber">{subs}</span> Subscribers </span> {views} Views .{timestamp}
           </p>
           <p>{description}</p>
        </div>

      
    </div>
  );
}

export default VideoRow;