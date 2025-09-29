import { useState, useRef } from 'react'
import ReactPlayer from 'react-player'

import './App.css'

function App() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false)

  const handleReverse = () => {
    const fps = 30;
    let intervalReverse = setInterval(() => {
      if (videoRef.current.currentTime <= 0) {
        clearInterval(intervalReverse);
        videoRef.current.pause();
      }
      else {
        videoRef.current.currentTime -= 1 / fps;
      }
    }, 1000 / fps);
  }

  const handlePlay = () => {
    setPlay(true);
  }


  return (
    <>
      <ReactPlayer
        ref={videoRef}
        src='/assets/views.mp4'
        width="100%"
        playing={play}
        controls
        height={'100%'}
      />
      <button onClick={() => { handlePlay() }}>Play</button>
      <button onClick={() => { handleReverse() }}>Reverse</button>
    </>
  )
}

export default App


// Resource: https://www.geeksforgeeks.org/html/how-to-play-video-in-reverse-in-html5/