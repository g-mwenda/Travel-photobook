import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import MiniatureCard from './MiniatureCard';

function SetPage({ sets, setSets, miniatures, setMiniatures }) {
    const navigate = useNavigate();
    const { id } = useParams();
    const set = sets.find(set => set.id===parseInt(id))
    // const [ set, setSet ] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:9292/miniature_sets/${id}`)
    //     .then(res => res.json())
    //     .then(data => setSet(data))
    // }, [])
    
    const miniatureCards = set?.miniatures?.map((miniature, index)  => <MiniatureCard key={ index } miniature={ miniature }/>)

    const handleDelete = () => {
        fetch(`/miniature_sets/${id}`, 
            { method: "DELETE" })
        .then(() => removeSet(id))
        .then(() => navigate("/sets"));
    }

    const removeSet = id => {
        setSets(sets.filter(s => s.id !=id))
        setMiniatures(miniatures.filter(mini => mini.miniature_set_id !=id))
    }

  return (
    <div className="set-page">
        <h2>{ set?.name }</h2>
        <h3>Date posted: { set?.year }</h3>
        <Link to={`/sets/${id}/miniatures/new`}>
            <button className="form-link" >Add Photo</button>
        </Link>
        <Link to={`/sets/${id}/edit`}>
            <button className="form-link" >Edit </button>
        </Link>
        <button className="form-link" onClick={handleDelete}>Delete</button><br /><br />
        <div className="card-grid">{miniatureCards}</div>
    </div>
  )
}

export default SetPage;