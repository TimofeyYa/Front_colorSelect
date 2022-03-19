import React from "react";

import SelectLine from './SelectLine'
import Palette from './Palette';

function ColorPicker(props){
    

    return(
      <div className="color__controlWrap">
          <SelectLine changeFunc={ props.changeFunc}></SelectLine>
          <Palette exitPanel={props.exitPanel} changeFunc={ props.changeFunc}></Palette>
      </div>
    )
}

export default ColorPicker;