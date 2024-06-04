import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MainVideo from './components/MainVideo'
import CommentSection from './components/CommentSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />  
      <MainVideo />
      <CommentSection />
      {/* <VideoList />  */}


    </>
  )
}

export default App
