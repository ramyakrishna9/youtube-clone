import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import VerifiedIcon from '@material-ui/icons/CheckCircleOutline';

import './ChannelRow.css';

function ChannelRow({ image, channel, noofvideos, verified, subs, description }) {
  return (
    <div className="channelrow">
        <Avatar className="channelrow__logo"
         alt={channel} src={image} />
        <div className="channelrow__text">
           <h4>{channel} {verified && <VerifiedIcon/>}</h4>
           <p>{subs} subscribers . {noofvideos} videos</p>
           <p>{description}</p>
        </div> 
      
    </div>
  );
}

export default ChannelRow;