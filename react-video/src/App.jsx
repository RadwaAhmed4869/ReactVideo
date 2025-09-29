import { useState } from 'react'
import ReactPlayer from 'react-player'

import './App.css'

function App() {
  const [play, setPlay] = useState(false)

  const handleReverse = () => {
    
  }

  const handlePlay = () => {
    setPlay((prevState) => !prevState);
  }


  return (
    <>
      <ReactPlayer
        playing={play}
        height={'100%'}
        src='../public/assets/views.mp4' width="100%"
      />
      <button onClick={() => { handlePlay() }}>Play</button>
      <button onClick={() => { handleReverse() }}>Reverse</button>
    </>
  )
}

export default App
