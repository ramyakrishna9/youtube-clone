import React from 'react';
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';


import './SearchPage.css';

function SearchPage() {
  return (
    <div className="searchpage">
        <div className="searchpage__filter">
            <TuneIcon />
            <h2>FILTER</h2>
        </div>
        <hr />
        <ChannelRow 
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpwbv6e-cpJs2xtKffdq495CSLwqzlNwDDcA&usqp=CAU"
          channel="clever programmer"
          noofvideos="220"
          verified
          subs="660k"
          description="This is a very big channel and it having a lot of good stuff to practise"/>
        <hr />

      <VideoRow
        channel="suman tv"
        title="lets watch bed time stories"
        views="1.4m"
        subs="660k"
        description="you want to listen the bed time stories" 
        timestamp="2hours ago"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0UwlbpnOIKLoch9HIIBXLowbfCYRlXBV4og&usqp=CAU"
      />
      <VideoRow
      title="Let's Build an Instagram Reels Clone with REACT JS for Beginners!"
      channel="cleverprogrammer"
      views="1.2m"
      description="FREE JavaScript Training ..."
      timestamp="3days ago"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7DN5QV2o7_8R2D3DV_Fnumu3uNEaeEzch8g&usqp=CAU"

      
      />
      <VideoRow 
      title="This ONE TRICK destroys your competition as a freelancer in 2020"
      channel="clever programmer"
      views="2.2m"
      description="try to do freelancer"
      timestamp="1week ago"
      image="https://i.ytimg.com/an_webp/inI_ut7ltCw/mqdefault_6s.webp?du=3000&sqp=COCA4PkF&rs=AOn4CLB8Feh1ulSEfIIiidACnhzQLStpZw"

      /> 
      
    </div>
  );
}

export default SearchPage;