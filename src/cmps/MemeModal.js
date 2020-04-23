import React from 'react';
import { Link } from 'react-router-dom';

function MemeModal({newMemeUrl}) {
    return (
        <div className="flex justify-center align-center column">
            <img className="meme-pic-edited" src={newMemeUrl} alt=""/>
            <a 
                className="nav-link meme-link" 
                href={newMemeUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
                {newMemeUrl}
            </a>
            <Link
                className="btn btn-success"
                to="/meme">
                Generate Another Meme
            </Link>
        </div>
    )
}

export default MemeModal
