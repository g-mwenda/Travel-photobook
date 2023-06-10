import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function MiniaturePage({ miniatures, setMiniatures, sets, setSets }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const miniature = miniatures.find(mini => mini.id===parseInt(id))
    const set = sets.find(s => s.id===parseInt(miniature?.miniature_set_id))

    const handleDelete = () => {
        fetch(`/miniatures/${id}`, 
            { method: "DELETE" })
        .then(() => removeMiniature(id))
        .then(() => navigate(`/sets/${miniature.miniature_set_id}`));
    }

    const removeMiniature = id => {
        setMiniatures(miniatures.filter(mini => mini.id !=id));
        const updatedSet = {...set, miniatures: [...(set.miniatures.filter(mini => mini.id !=id))]};
        setSets(sets.map(s => s.id===updatedSet.id ? updatedSet : s));
    }

  return (
    <div className="mini-container">
        <div className="mini-image">
             <img src={miniature?.img_url} alt=""/>
        </div>
        <h2>{ miniature?.name }</h2>
        <div className="mini-details">
            <p>Overall experience: {miniature?.rarity}</p>
            <p>Comment: {miniature?.comments}</p>
            <p className="set-link">Location:
                <Link to={`/sets/${miniature?.miniature_set_id}`}> {set?.name}</Link>
            </p>
           
            <Link to={`/miniatures/${id}/edit`}>
                <button className="mini-btn">Edit Location</button>
            </Link>
            <button className="mini-btn" onClick={handleDelete}>Delete Destination</button>
        </div>
    </div>
  )
}

export default MiniaturePage