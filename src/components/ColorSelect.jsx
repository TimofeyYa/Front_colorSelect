import React from 'react';
import classNames from 'classnames';

import ColorPicker from './elements/ColorPicker';



function ColorSelect(props) {

  const [hidden, setHidden] = React.useState(true);
  const [selectColor, setSelectColor] = React.useState(`#${props.value}`);
  const [colorTxt, setColorTxt] = React.useState(selectColor.slice(1,7));

  const hiddenTogle = () =>{
    setHidden(!hidden);
  }

  const selectThisColor = color =>{
    setSelectColor(color);
    setColorTxt(color.slice(1,7));
    props.onChange(color);
    setHidden(true);
  }

  const getColorTxt = (txt) =>{
    setColorTxt(txt);
    if (txt.length === 3 || txt.length === 6){
      setSelectColor(`#${txt}`);
      props.onChange(`#${txt}`);
    }
   
  }

  const exitPanel = ()=>{
    setHidden(true);
  }

  return (
    
      <div className="color">
        <div className="colorWrap">
          <div className="color__data">
              <div className="colorStatus" style={{background: selectColor}}>
                  #
              </div>
              <div className="colorName">
                  <input maxLength={6} type="text" value={colorTxt} onChange={(e)=>getColorTxt(e.target.value)}></input>
              </div>
              <div className={classNames('colorArr', {"colorArr--rotated": hidden})} onClick={hiddenTogle}>
                  
                  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                  width="13px" height="13px" viewBox="0 0 284.929 284.929" 
                 >
                  <g>
                  <path d="M282.082,195.285L149.028,62.24c-1.901-1.903-4.088-2.856-6.562-2.856s-4.665,0.953-6.567,2.856L2.856,195.285
                  C0.95,197.191,0,199.378,0,201.853c0,2.474,0.953,4.664,2.856,6.566l14.272,14.271c1.903,1.903,4.093,2.854,6.567,2.854
                  c2.474,0,4.664-0.951,6.567-2.854l112.204-112.202l112.208,112.209c1.902,1.903,4.093,2.848,6.563,2.848
                  c2.478,0,4.668-0.951,6.57-2.848l14.274-14.277c1.902-1.902,2.847-4.093,2.847-6.566
                  C284.929,199.378,283.984,197.188,282.082,195.285z"/>
                  </g>
                  </svg>
      
              </div>
          </div>
          <div className={classNames('color__control', {'color__control--hidden': hidden})}>
              <ColorPicker exitPanel={exitPanel} changeFunc={selectThisColor}></ColorPicker>
          </div>
      </div>
      </div>
  
  );
}

export default ColorSelect;
