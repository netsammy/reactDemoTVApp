import React, { useState, useEffect } from 'react';
import axios from 'axios';

function VideoGrid() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/netsammy/gh-pages/main/data.json')
      .then(response => {
        setVideos(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>YouTube Videos</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Video</th>
          </tr>
        </thead>
        <tbody>
          {videos.map(video => (
            <tr key={video.id}>
              <td>{video.title}</td>
              <td>
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VideoGrid;