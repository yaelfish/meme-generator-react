import React from 'react';
import MemeForm from './MemeForm';
import PicsCarousel from './PicsCarousel';

export default function MemeEdit(props) {
    
    function handleFormData(memeUrl){
        props.handleFormData(memeUrl);
    }

    function updateTexts(texts) {
        props.updateTexts(texts);
    }

    function onSelectPic(selectedPic){
        props.onSelectPic(selectedPic)
    }

    return (<React.Fragment>
        <div className="edit-container">
            <h2 className="meme-name">{props.currMeme.name}</h2>
            <PicsCarousel memes={props.memes} onSelectPic={onSelectPic}/>
            <MemeForm handleFormData={handleFormData} updateTexts={updateTexts} currMeme={props.currMeme}/>
        </div>
    </React.Fragment>)
}