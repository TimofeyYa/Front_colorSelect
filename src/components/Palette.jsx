import React from "react";

import Holst from "./canvas/Holst";
import Spectr from "./canvas/Spectr";

function Palette(props){

    const [selectColor, setSelectColor] = React.useState('#fa0507');
    const [holstColor, setHolstColor] = React.useState('#fa0507');
    
    const changeHolst = (color) =>{
        setHolstColor(color);
    }

    const changeSelectColor = (color) =>{
        setSelectColor(color);
    }

    return(
        <div className="color__palette">
            <div className="color__picker">
                <Holst changeSelectColor={changeSelectColor} holstColor={holstColor}></Holst>
                <Spectr changeHolst={changeHolst}></Spectr>
            </div>
            <div className="color__bottom">
                <div className="color__btns">
                    <button onClick={() => props.changeFunc(selectColor)} id="okBtn">OK</button>
                    <button onClick={() => props.exitPanel()} id="cancelBtn">Cancel</button>
                </div>
                <div className="color__preview">
                    <p>#<span>{selectColor.slice(1,7)}</span></p>
                    <div
                    style={{background: selectColor}}
                     className="color__previewBlock"></div>
                </div>
            </div>   
          </div>
    )
}

export default Palette;