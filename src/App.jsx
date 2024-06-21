import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.scss';

import Header from './components/Header/Header';

import VideoPage from "./pages/VideoPage/VideoPage";
import UploadPage from "./pages/UploadPage/UploadPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />  
      <Routes>
        <Route path="/" element={<VideoPage />}>
              <Route path="/videos/:videoId" element={<VideoPage />} />  
        </Route>
        <Route path="/upload" element={<UploadPage/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App;
