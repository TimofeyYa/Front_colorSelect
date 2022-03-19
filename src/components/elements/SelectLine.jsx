import classNames from "classnames";
import React from "react";
import DefaultColor from './DefaultColor'

function SelectLine(props){
    const defaultColors = ['#CD5C5C',"#B22222","#FFB6C1","#ADFF2F","#00FA9A","#006400","#808000","#66CDAA","#FFD700","#00FFFF","#0000FF","#8B4513", "#8B008B", "#4B0082"],
          maxLength = defaultColors.length - 9;

    const [iSlide, setISlide] = React.useState(0);
    const [arrLeft, setArrLeft] = React.useState(false);
    const [arrRight, setArrRight] = React.useState(false);

    const slideThis = side =>{
        setISlide(iSlide + side);
        
    }
    

    React.useEffect(()=>{
        if (iSlide <= maxLength * -1){
            setArrRight(true);
        }else {
            setArrRight(false);
        }

        if (iSlide >= 0){
            setArrLeft(true);
        } else {
            setArrLeft(false);
        }
    }, [iSlide]);

    React.useEffect(()=>{
        if (maxLength <= 0){
            setArrRight(true);
            setArrLeft(true);
        }
    }, []);

    return(
        <div className="color__selectLine">
              <div  className={classNames('color__controlArr', {'color__controlArr--hidden': arrLeft})} id="colorArr--left" onClick={() => slideThis(1)}>
                  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                  width="10px" height="10px" viewBox="0 0 284.929 284.929"
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
              <div className="color__trackWrap">
                  <DefaultColor changeFunc={props.changeFunc} stage={iSlide} colors={defaultColors}></DefaultColor>
              </div>
              <div className={classNames('color__controlArr', {'color__controlArr--hidden': arrRight})}  id="colorArr--right" onClick={() => slideThis(-1)}>
                  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                      width="10px" height="10px" viewBox="0 0 284.929 284.929" 
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
    )
}

export default SelectLine;