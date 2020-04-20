import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import memeService from '../services/memeService';
import Canvas from '../cmps/Canvas';
import MemeEdit from '../cmps/Edit/MemeEdit';
import useToggle from '../hooks/useToggle';
import MemeModal from '../cmps/MemeModal';

export default function MemeDetails({ memes }) {

    let { id } = useParams();
    const history = useHistory();
    const [currMeme, setCurrMeme] = useState({});
    const [texts, setTexts] = useState({});
    const [font, setFont] = useState('impact');
    const [newMemeUrl, setnewMemeUrl] = useState('');
    const [isEditMode, toggleEditMode] = useToggle(true);

    useEffect(() => {
        (async function () {
            const currMeme = await memeService.getMemeById(id);
            setCurrMeme(currMeme);
            setnewMemeUrl(newMemeUrl);
        })()
    }, [id, newMemeUrl, font]);

    function onSelectPic(picUrl) {
        const selectedMeme = memes.filter((meme) => meme.url === picUrl);
        id = selectedMeme[0].id;
        setCurrMeme(selectedMeme[0]);
        history.push(`/meme/${id}/edit`);
    }

    function handleFormData(memeUrl) {
        toggleEditMode(false);
        setCurrMeme(currMeme);
        setnewMemeUrl(memeUrl);
        history.push(`/meme/${id}`);
    }

    function updateTexts(texts) {
        setTexts(texts);
        setFont(texts.font);
    }

    function onCloseModal() {
        toggleEditMode(!isEditMode);
        history.push('/meme');
    }

    return (<React.Fragment>
        {isEditMode && <section className="meme-container flex justify-around">
            <Canvas
                currMeme={currMeme}
                texts={texts}
            />
            <MemeEdit
                memes={memes}
                currMeme={currMeme}
                handleFormData={handleFormData}
                updateTexts={updateTexts}
                onSelectPic={onSelectPic}
            />
        </section>}
        {!isEditMode && <>
            <section className="meme-modal-container">
                <button
                    className="btn btn-secondary"
                    onClick={onCloseModal}>X
                </button>
                <MemeModal newMemeUrl={newMemeUrl} />
            </section>
        </>}
    </React.Fragment>)
}
