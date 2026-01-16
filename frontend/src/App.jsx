import { useState } from 'react'
import './App.css'
import {Route,BrowserRouter as  Router,Routes} from 'react-router-dom';
import LandingPage from './Pages/landing'
import Authentication from './Pages/authentication'
import { AuthProvider } from './contexts/AuthContext';
import VideoMeet from './Pages/videoMeet';
import HomeComponent from './Pages/home';
import History from './Pages/history';

function App() {

  return (
    <>
     <Router>
      <AuthProvider>
      <Routes>
        
            <Route path='/' element={<LandingPage/>}/>

            <Route path='/auth' element={<Authentication/>}/>

            <Route path='/:url' element={<VideoMeet/>} />

            <Route path='/home' element={<HomeComponent/>} />

            <Route path='/history' element={<History/>}/>

      </Routes>
      </AuthProvider>
     </Router>
    </>
  )
}

export default App
