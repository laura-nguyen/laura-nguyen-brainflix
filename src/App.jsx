import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import MainVideo from './components/MainVideo'
import CommentSection from './components/CommentSection/CommentSection'
import VideoList from './components/VideoList'

function App() {
  const [currentVideo, setCurrentVideo] = useState(0)

  const navigate = (videoToGoTo) => {
    setCurrentVideo(videoToGoTo);

  }

  return (
    <>
      <Header />  
      <MainVideo />
      <CommentSection />
      <VideoList /> 


    </>
  )
}

export default App
