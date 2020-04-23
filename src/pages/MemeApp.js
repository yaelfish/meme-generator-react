import React from 'react'
import MemeList from '../cmps/MemeList';

export default function MemeApp({memes}) {

    return (
        <main className="container-fluid container">
            <h2 className="gallery-title">Choose a meme to start editing</h2>
            <MemeList memes={memes}/>
        </main>
    )
}
