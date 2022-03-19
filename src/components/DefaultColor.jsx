import React from "react";

function DefaultColor (props){

    
    return(
        <div style={{transform: `translate(${props.stage * 26}px, 0px)`}} className="color__track">
            {props.colors && props.colors.map((item, index) =>
            <div key={`${item}_${index}-default`} className="color__item" style={{background:item}} onClick={()=> props.changeFunc(item)}></div>
            )}
        </div>
    )
}

export default DefaultColor;