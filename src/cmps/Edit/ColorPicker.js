import React, { useEffect, useState } from 'react';

function ColorPicker({ changeColor, colorType, toggleVisibility }) {

    const [color, setColor] = useState();
    
    useEffect(() => {
        changeColor(color, colorType);
    }, [color, colorType, changeColor])

    const onColorSelection = (e) => {
        let changedColor = e.target.value;
        setColor(changedColor);
        changeColor(changedColor, colorType);
    }

    return (
        <div className="color-picker">
            <button 
                className="btn btn-sm btn-secondary close-color-picker"
                onClick={toggleVisibility}
            >X</button>
            <input 
                type="checkbox" 
                id="chk-ham-menu" 
                className="ham-check" 
                onChange={(e)=>setColor(e.target.value)} 
            />
            <div className="ham-menu flex column">
                <div className="flex">
                    <label htmlFor="amethyst" className="color-picker amethyst" data-color="#9b59b6" onClick={onColorSelection}></label>
                    <label htmlFor="peter" className="color-picker peter" data-color="#3498db" onClick={onColorSelection}></label>
                    <label htmlFor="emarald" className="color-picker emarald" data-color="#2ecc71" onClick={onColorSelection}></label>
                    <label htmlFor="carrot" className="color-picker carrot" data-color="#e67e22" onClick={onColorSelection}></label>
                </div>
                <div className="flex">
                    <label htmlFor="alizarin" className="color-picker alizarin" data-color="e74c3c" onClick={onColorSelection}></label>
                    <label htmlFor="sun" className="color-picker sun" data-color="#f1c40f" onClick={onColorSelection}></label>
                    <label htmlFor="black" className="color-picker black" data-color="#000000" onClick={onColorSelection}></label>
                    <label htmlFor="white" className="color-picker white" data-color="#ffffff" onClick={onColorSelection}></label>
                </div>
                <div className="flex">
                    <input type="text" name="color-chooser" id="" value="#ffffff" placeholder="#ffffff" onChange={onColorSelection} />
                </div>
            </div>
            <input type="radio" name="color-chooser" id="black" value="#000000" onChange={onColorSelection} />
            <input type="radio" name="color-chooser" id="white" value="#ffffff" onChange={onColorSelection} />
            <input type="radio" name="color-chooser" id="amethyst" value="#9b59b6" onChange={onColorSelection} />
            <input type="radio" name="color-chooser" id="peter" value="#3498db" onChange={onColorSelection} />
            <input type="radio" name="color-chooser" id="emarald" value="#2ecc71" onChange={onColorSelection} />
            <input type="radio" name="color-chooser" id="carrot" value="#e67e22" onChange={onColorSelection} />
            <input type="radio" name="color-chooser" id="alizarin" value="#e74c3c" onChange={onColorSelection} />
            <input type="radio" name="color-chooser" id="sun" value="#f1c40f" onChange={onColorSelection} />
        </div>
    )
}

export default ColorPicker
