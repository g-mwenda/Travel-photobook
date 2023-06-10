import React, { useState, useEffect, useContext }  from 'react';
import MiniatureCard from './MiniatureCard';
import { AuthContext } from '../context/AuthContext';

function Home() {
    const {current_user} = useContext(AuthContext)
    const [ newMinis, setNewMinis ] = useState([]);
    
    useEffect(() => {
        fetch('/miniatures/new')
        .then(res => res.json())
        .then(data => setNewMinis(data))
      }, [])
    
    
    const miniatureCards = newMinis.map((miniature, index)  => <MiniatureCard key={ index } miniature={ miniature }/>)

    return (
        <div className="set-page">
          
            
            <div className="quote"><b>
                <p><i>"Life is either a daring adventure or nothing at all!"</i></p> </b>
                <p>- Gabriel, creator of the Travel Photobook</p></div>
            <h3>Latest destinations in your collection:</h3>
            <div className="card-grid">{ miniatureCards }</div>
          
              
        </div>
        
    )
}

export default Home;