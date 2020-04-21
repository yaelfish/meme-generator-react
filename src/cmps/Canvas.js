import React from 'react';

export default function Canvas({ texts, currMeme}) {
    console.log(currMeme);

    return (<React.Fragment>
        <div 
            className="canvas-container"
        >
            <img
                src={currMeme.url}
                alt={currMeme.name}
                className="canvas-img"
            />
            <div 
                className="flex column justify-content-between align-center canvas-texts-container"
                style={{ position: "absolute", width: "100%", height: `${currMeme.height}px`, maxHeight: "500px" }}
            >
                <h2 
                    className="text1" 
                    style={{ fontFamily: texts.font, top: "16px", color: texts.color1, WebkitTextStroke: `3px ${texts.stroke1}` }}
                >{texts.text1}</h2>
                <h2 
                    className="text2" 
                    style={{ fontFamily: texts.font, bottom: "32px", color: texts.color2, WebkitTextStroke: `3px ${texts.stroke2}` }}
                >{texts.text2}</h2>
            </div>
        </div>
    </React.Fragment>)
}

