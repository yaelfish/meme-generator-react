import React from 'react';
import { useHistory } from 'react-router-dom';

export default function MemePreview(props) {
    
    const history = useHistory();
    
    function onSelectCard() {
        const {id} = props.meme;
        history.push(`/meme/${id}/edit`);
    }

    return (
        <div onClick={onSelectCard}>
            <img
                src={props.meme.url}
                alt={props.meme.name}
                className="card-img-top meme-img-preview"
            />
            <div className="card-body">
                <p className="card-text">{props.meme.name}</p>
            </div>
        </div>
    )
}

 