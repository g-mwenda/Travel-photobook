import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function NewMiniature({ miniatures, setMiniatures, sets, setSets }) {
    const navigate = useNavigate();
    const { miniatureSetId } = useParams();
    const set = sets.find(s => s.id===parseInt(miniatureSetId))
    const [ formData, setFormData ] = useState({
        name: "",
        rarity: "",
        size: "",
        comments: "",
        img_url: ""
    });

    const handleSubmit = e => {
        e.preventDefault();
        fetch(`/miniature_sets/${miniatureSetId}/miniatures`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
             body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then((data) => addMiniature(data))
            .then(() => navigate(`/sets/${miniatureSetId}`));
            console.log(set.miniatures)
        }

    const addMiniature = (data) => {
        setMiniatures([data, ...miniatures])
        const updatedSet = {...set, miniatures: [data, ...set.miniatures]}
        setSets(sets.map(s => s.id===updatedSet.id ? updatedSet : s))
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

  return (
    <form className="set-form" onSubmit={handleSubmit}>
        <h2>New Photo for {set.name}</h2>
        <div className="form-text">
            <label htmlFor="name">Location:
                <input type="textarea" id="name" value={formData.name} onChange={handleChange} required="required" autoFocus={true} /><br />
            </label>
            <label htmlFor="rarity">Experience:
                <select className="new-select" type="textarea" id="rarity" value={formData.rarity} onChange={handleChange} >
                    <option value=""></option>
                    <option value="Terrible">1</option>
                    <option value="Poor">2</option>
                    <option value="Average">3</option>
                    <option value="Good">4</option>
                    <option value="Awesome">5</option>
                  
                </select><br />
            </label>
            

            <label htmlFor="comments">Comments:
                <input type="textarea" id="comments" value={formData.comment} onChange={handleChange} autoFocus={true} /><br />
            </label>
           
            <label htmlFor="img_url">Image URL: 
                <input type="textarea" id="img_url" value={formData.img_url} onChange={handleChange} required="required" /><br />
            </label>
            <input type="submit" value="Submit" className="form-btn" />
        </div>
    </form>
  )
}

export default NewMiniature;