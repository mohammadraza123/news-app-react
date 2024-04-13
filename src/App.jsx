import Navbar from './Components/Navbar/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import News from './Components/News';
import {Routes, Route} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';


export default function App(){

  const [progress, setProgress] = useState(0);
  
  // Hide Api Key using Enviroment Variable //
  const apiKey = import.meta.env.VITE_REACT_APP_NEWS_API;
  return(
    <>
    {/* Top Loading Bar */}
      <LoadingBar
        progress={progress}
      />
    <Navbar />
    <Routes>
      <Route  path='/' element = {<News setProgress = {setProgress} key = "general" category = 'general' apiKey = {apiKey} />}/>
      <Route path='/business' element = {<News setProgress = {setProgress} key = "business" category = 'business' apiKey = {apiKey}/>}/>
      <Route path='/science' element = {<News setProgress = {setProgress} key = "science" category = 'science' apiKey = {apiKey}/>}/>
      <Route path='/health' element = {<News setProgress = {setProgress} key = "health" category = 'health' apiKey = {apiKey}/>}/>
      <Route path='/sports' element = {<News setProgress = {setProgress} key = "sports" category = 'sports' apiKey = {apiKey}/>}/>
      <Route path='/technology' element = {<News setProgress = {setProgress} key = "technology" category = 'technology' apiKey = {apiKey}/>}/>
      <Route path='/entertainment' element = {<News setProgress = {setProgress} key = "entertainment" category = 'entertainment'apiKey = {apiKey} />}/>

    </Routes>
    
    </>
  )
}