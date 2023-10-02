import React, { useState, useEffect } from 'react';
import axios from 'axios';
import YouTubeVideo from './YouTubeVideo';


function VideoGrid() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/netsammy/gh-pages/main/reactdata.json')
      .then(response => {
        setVideos(response.data.Menu);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleVideoClick = video => {
    //console.log(video.URL);
    setSelectedVideo(video);
  };



  return (
    <table width="100%">
      <tr valign="top">
        <td>
        <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Video</th>
          </tr>
        </thead>
        <tbody>
          {videos.map(video => (
            <tr key={video.Name} onClick={() => handleVideoClick(video)}>
              <td>{video.Name}</td>
              <td>
                <img
                  width="100"
                  height="100"
                  alt={video.URL}
                  src={video.Image}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
        </td>
        <td>
        <div>
      <h1>YouTube Videos</h1>
      {selectedVideo && (
        <div>
          <YouTubeVideo videoId={selectedVideo.videoId} />
          <h2>{selectedVideo.Name}</h2>
          
        </div>
         )}


          </div>
        </td>
      </tr>
      </table>
    
     
     
   
  );
}

export default VideoGrid;