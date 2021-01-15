import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import SearchHeader from "./components/search_header/search_header";
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCdq-pMmOregMfmDXaPnSUB8AWrEYk6Dgs',
      requestOptions
    )
    .then(response => response.json())
    .then(result => setVideos(result.items))
    .catch(err => console.log(err))
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
