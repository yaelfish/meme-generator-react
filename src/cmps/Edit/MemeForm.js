import React, { useEffect, useState, useCallback } from 'react';
import useInput from '../../hooks/useInput';
import useToggle from '../../hooks/useToggle';
import ColorPicker from './ColorPicker';

function MemeForm({ handleFormData, updateTexts, currMeme }) {

    const [text1, bindText1, resetText1] = useInput("");
    const [text2, bindText2, resetText2] = useInput("");
    const [font, bindFont, resetFont] = useInput('impact');
    const [isVisible, toggleIsVisible] = useToggle(false);
    const [color1, setColor1] = useState("#ffffff");
    const [color2, setColor2] = useState("#ffffff");
    const [stroke1, setStroke1] = useState("#000000");
    const [stroke2, setStroke2] = useState("#000000");
    const [type, setType] = useState();

    useEffect(() => {
        updateTexts({ text1, color1, stroke1, text2, color2, stroke2, font });
    }, [text1, color1, stroke1, text2, color2, stroke2, font])

    const submitHandler = (e) => {
        e.preventDefault();
        const memeData = { text1, color1, stroke1, text2, color2, stroke2, font, currMeme };
        resetText1();
        resetText2();
        resetFont();
        handleFormData(memeData);
    }

    const toggleVisibility = () => {
        toggleIsVisible(!isVisible);
    }

    const changeColor = useCallback((color, colorType) => {

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
    }, []);

    const toggleColorPicker = (e) => {
        e.preventDefault();
        let type = e.currentTarget.attributes['input-data'].value;
        setType(type);
        toggleVisibility();
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

                <div className="form-group flex">
                    <input
                        className="form-control"
                        type="text"
                        name="text1"
                        {...bindText1}
                        required
                        placeholder="Top Text" />
                    <button
                        onClick={toggleColorPicker}
                        style={{ backgroundColor: "transparent" }}
                        input-data="color1"
                        title="font color"
                    >
                        <div style={{ backgroundColor: color1, width: "15px", height: "15px" }}></div>
                    </button>
                    <button
                        onClick={toggleColorPicker}
                        style={{ backgroundColor: "transparent" }}
                        input-data="stroke1"
                        title="stroke color"
                    >
                        <div style={{ backgroundColor: stroke1, width: "15px", height: "15px" }}></div>
                    </button>
                </div>
                <div className="form-group flex">
                    <input
                        className="form-control"
                        type="text"
                        name="text2"
                        {...bindText2}
                        placeholder="Bottom Text" />
                    <button
                        onClick={toggleColorPicker}
                        style={{ backgroundColor: "transparent" }}
                        input-data="color2"
                        title="font color"
                    >
                        <div style={{ backgroundColor: color2, width: "15px", height: "15px" }}></div>
                    </button>
                    <button
                        onClick={toggleColorPicker}
                        style={{ backgroundColor: "transparent" }}
                        input-data="stroke2"
                        title="stroke color"
                    >
                        <div style={{ backgroundColor: stroke2, width: "15px", height: "15px" }}></div>
                    </button>
                </div>
                {isVisible && <ColorPicker
                                changeColor={changeColor}
                                colorType={type}
                                toggleVisibility={toggleVisibility}
                            />}
                <button type="submit" className="btn btn-primary" onClick={submitHandler}>Generate Meme</button>
            </form>
        </div>
    )
}

export default MemeForm;
