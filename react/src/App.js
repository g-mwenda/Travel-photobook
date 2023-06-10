import './App.css';
import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Sets from './components/Sets';
import SetPage from './components/SetPage';
import NewSet from './components/NewSet';
import EditSet from './components/EditSet';
import Miniatures from './components/Miniatures';
import MiniaturePage from './components/MiniaturePage';
import NewMiniature from './components/NewMiniature';
import EditMiniature from './components/EditMiniature.js';
import Login from "./components/Login.js"
import { AuthProvider } from './context/AuthContext';
import { PostProvider } from './context/PostContext';
import Profile from './components/Profile';
import Register  from './components/Register';
import { Logout } from './components/Logout';

function App() {
  const [ sets, setSets ] = useState([]);
  const [ miniatures, setMiniatures ] = useState([]);

    useEffect(() => {
        fetch('/miniature_sets')
        .then(res => res.json())
        .then(data => setSets(data))
      }, [])

    useEffect(() => {
        fetch('/miniatures')
        .then(res => res.json())
        .then(data => setMiniatures(data))
      }, [])

    return (
     
  <AuthProvider>
    <PostProvider>
    
    <div className = "App">
      
      <Navigation/>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/sets" element={<Sets sets={ sets }/>}/>
          <Route exact path="/sets/:id" element={<SetPage sets={ sets } setSets={ setSets } miniatures={ miniatures } setMiniatures={ setMiniatures } />}/>
          <Route exact path="/newset" element={<NewSet sets={ sets } setSets={ setSets } />}/>
          <Route exact path="/sets/:id/edit" element={<EditSet sets={ sets } setSets={ setSets } />}/>
          <Route exact path="/miniatures" element={<Miniatures miniatures={ miniatures }/>}/>
          <Route exact path="/miniatures/:id" element={<MiniaturePage miniatures={ miniatures } setMiniatures={ setMiniatures } sets={ sets } setSets={ setSets }/>}/>
          <Route exact path="/sets/:miniatureSetId/miniatures/new" element={<NewMiniature miniatures={ miniatures } setMiniatures={ setMiniatures } sets={ sets } setSets={ setSets } />}/>
          <Route exact path="/miniatures/:id/edit" element={<EditMiniature miniatures={ miniatures } setMiniatures={ setMiniatures } sets={ sets } setSets={ setSets } />}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/profile" element={<Profile/>}/>
          <Route exact path="/logout" element={<Logout/>}/>
          <Route exact path="/register" element={<Register/>}/>
        </Routes>
    </div>
    </PostProvider>
    </AuthProvider>
)
}

export default App;
