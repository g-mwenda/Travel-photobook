import React from "react";
import { Link } from 'react-router-dom';
import SetCard from "./SetCard";

function Sets({ sets }) {
    const setCards = () => sets?.map((set, index) => <SetCard key={index} set={set} />) 

    return (
        <div>
            <div className="counter">You have photos from {sets?.length} different location(s).
                <Link to={"/newset"}>
                    <button className="form-link" >Add Destination</button>
                </Link>
            </div>
            <div className="set-list">{setCards()}</div>
        </div>
    )
}

export default Sets;