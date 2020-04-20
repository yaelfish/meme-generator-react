import React, { useEffect, useState } from 'react';
import memeService from '../../services/memeService'
import useInput from '../../hooks/useInput';
import useToggle from '../../hooks/useToggle';
// import TextEdit from './TextEdit';
import ColorPicker from './ColorPicker';

function MemeForm({ handleFormData, updateTexts, currMeme }) {

    const [text1, bindText1, resetText1] = useInput("");
    const [text2, bindText2, resetText2] = useInput("");
    const [font, bindFont, resetFont] = useInput("impact");
    const [isColor1, toggleisColor1] = useToggle(false);
    const [isColor2, toggleisColor2] = useToggle(false);
    const [isStroke1, toggleisStroke1] = useToggle(false);
    const [isStroke2, toggleisStroke2] = useToggle(false);
    const [color1, setColor1] = useState("#FFFFFF");
    const [color2, setColor2] = useState("#FFFFFF");
    const [stroke1, setStroke1] = useState("#000000");
    const [stroke2, setStroke2] = useState("#000000");

    const submitHandler = async (e) => {
        e.preventDefault();
        const memeUrl = await memeService.postMeme({ text1, color1, stroke1, text2, color2, stroke2, font, currMeme });
        resetText1();
        resetText2();
        resetFont();
        handleFormData(memeUrl);
    }

    useEffect(() => {
        updateTexts({ text1, color1, stroke1, text2, color2, stroke2, font  });
        console.log(font);
        
    }, [text1, color1, stroke1, text2, color2, stroke2, font])

    function changeColor(color, colorType) {
        switch (colorType) {
            case 'color1':
                setColor1(color);
                break;
            case 'color2':
                setColor2(color);
                break;
               
            case 'stroke1':
                setStroke1(color);
                break;

            case 'stroke2':
                setStroke2(color);
                break;

            default:
                break;
        }
    }

    return (
        <div className="edit-form flex justify-center column">
            <form className="flex column justify-center">
                <div className="form-group">
                    <label htmlFor="inputFont">Choose Font</label>
                    <select 
                        id="inputFont" 
                        name="font" 
                        className="form-control" 
                        {...bindFont}
                    >
                        <option style={{ fontFamily: "Impact" }} value="impact" defaultValue>Impact</option>
                        <option value="arial" style={{ fontFamily: "Arial" }} >Arial</option>
                        <option value="comic sans ms" style={{ fontFamily: "Comic Sans MS" }} >Comic Sans MS</option>
                        <option value="helvetica" style={{ fontFamily: "Helvetica" }} >Helvetica</option>
                        <option value="times" style={{ fontFamily: "Times" }} >Times</option>
                    </select>
                </div>

                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        name="text1"
                        {...bindText1}
                        required
                        placeholder="Top Text" />
                    <button onClick={(e) => {
                        e.preventDefault();
                        toggleisColor1(!isColor1)
                    }}>pick font color
                    </button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        toggleisStroke1(!isStroke1)
                    }}>pick stroke color
                    </button>
                    {isColor1 && <ColorPicker changeColor={changeColor} colorType='color1' />}
                    {isStroke1 && <ColorPicker changeColor={changeColor} colorType='stroke1' />}
                </div>

                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        name="text2"
                        {...bindText2}
                        placeholder="Bottom Text" />
                    <button onClick={(e) => {
                        e.preventDefault();
                        toggleisColor2(!isColor2)
                    }}>pick font color
                    </button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        toggleisStroke2(!isStroke2)
                    }}>pick stroke color
                    </button>
                    {isColor2 && <ColorPicker changeColor={changeColor} colorType='color2' />}
                    {isStroke2 && <ColorPicker changeColor={changeColor} colorType='stroke2' />}
                </div>


                <button type="submit" className="btn btn-primary" onClick={submitHandler}>Generate Meme</button>
            </form>
        </div>
    )
}

export default MemeForm;
