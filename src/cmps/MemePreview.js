import React from 'react';
import { useHistory } from 'react-router-dom';

export default function MemePreview(props) {
    
    const history = useHistory();
    const { url, name, id } = props.meme;

    function onSelectCard() {
        history.push(`/meme/${id}/edit`);
    }

    return (
        
        <div onClick={onSelectCard}>
            <img
                src={url}
                alt={name}
                className="card-img-top meme-img-preview"
            />
            <div className="card-body">
                <p className="card-text">{name}</p>
            </div>
        </div>
    )
}

 