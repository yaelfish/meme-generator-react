import React, {useState, useEffect} from 'react';
import AliceCarousel from 'react-alice-carousel';

export default function PicsCarousel({ memes, onSelectPic}) {
    
    const [carouselPics, setCarouselPics] = useState([]);

    const stagePadding = {
        paddingLeft: 50,
        paddingRight: 100
    };

    useEffect(() => {
        (async function(){
            const picsToRender = [];
            if (memes){
                memes.map((meme) => {
                    return picsToRender.push(meme.url)
                })
                await setCarouselPics(picsToRender);
            }
        })();
        renderImages(carouselPics);
    }, [memes])
    
    function renderImages(pictures) {
        const handleOnDragStart = e => e.preventDefault();
        return pictures.map(picture => {
            return (<img
                        alt={picture}
                        key={picture}
                        src={picture}
                        style={{ width: "78px", height: "78px", cursor: "pointer" }}
                        onDragStart={handleOnDragStart}
                        onClick={(e) => onSelectPic(e.currentTarget.attributes['alt'].value)}
                    />);
        });
    }

    return (<>
        { memes && (memes.length) && <div className="edit-container">
            <AliceCarousel
                mouseDragEnabled
                duration={400}
                stagePadding={stagePadding}
            >{
            renderImages(carouselPics)}</AliceCarousel>
        </div>}
    </>)
}