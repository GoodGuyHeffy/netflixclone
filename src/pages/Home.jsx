import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../Requests';


function Home() {
  return (
    <div>
      <Main />
      <Row rowID='1' title="Popular right now" fetchURL={requests.requestPopular}/>
      <Row rowID='2' title="Top Rated" fetchURL={requests.requestTopRated}/>
      <Row rowID='3' title="Trending" fetchURL={requests.requestTrending}/>
      <Row rowID='4' title="Now Playing" fetchURL={requests.requestNowPlaying}/>
      <Row rowID='5' title="UpComing" fetchURL={requests.requestUpcoming}/>
    </div>
  )
}

export default Home;