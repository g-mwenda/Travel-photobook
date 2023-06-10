import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditMiniature({ miniatures, setMiniatures, sets, setSets }) {
    const navigate = useNavigate();
    const { id } = useParams();
    const miniature = miniatures.find(mini => mini.id===parseInt(id))
    const set = sets.find(s => s.id===parseInt(miniature.miniature_set_id))
    const [ formData, setFormData ] = useState({
        name: "",
        rarity: "",
        size: "",
        units: "",
        img_url: ""
    });

    useEffect(() => {
        setFormData(miniature);
        }, [])

    const handleSubmit = e => {
        e.preventDefault();
        fetch(`/miniatures/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
             body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then((data) => updateMiniature(data))
            .then(() => navigate(`/miniatures/${id}`));
        }

    const updateMiniature = (data) => {
        setMiniatures(miniatures.map(mini => mini.id===data.id ? data : mini));
        const updatedSet = {...set, miniatures: [...(set.miniatures.map(mini => mini.id===data.id ? data : mini))]}
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
        <h2>Place : {miniature.name}</h2>
        <div className="form-text">
            
            <label htmlFor="name">Area:
                <input type="textarea" id="name" value={formData.name} onChange={handleChange} autoFocus={true} /><br />
            </label>
           
            <label htmlFor="rarity">Experience:
                <select className="new-select" type="textarea" id="rarity" value={formData?.rarity} onChange={handleChange}>
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
                <input type="textarea" id="img_url" value={formData.img_url} onChange={handleChange} /><br />
            </label>
            <input type="submit" value="Submit" className="form-btn" />
        </div>
    </form>
  )
}

export default EditMiniature;