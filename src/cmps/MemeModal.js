import React from 'react'

function MemeModal(props) {
    return (
        <div className="flex justify-center align-content-center">
            <img className="meme-pic-edited" src={props.newMemeUrl} alt=""/>
        </div>
    )
}

export default MemeModal
