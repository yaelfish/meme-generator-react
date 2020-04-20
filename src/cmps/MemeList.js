import React from 'react'
import MemePreview from './MemePreview';

export default function MemeList(props) {
    
    return (
        <React.Fragment>
            <ul className="gallery-container flex justify-center container">
                {props.memes.map((meme) => {
                return <li 
                        key={meme.id}
                        className="card"
                        >
                        <MemePreview meme={meme}/>
                       </li>
                })}
            </ul>
        </React.Fragment>
    )
}
