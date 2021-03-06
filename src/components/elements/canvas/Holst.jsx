import classNames from "classnames";
import React from "react";

import gradient from './bgGradient.png'

function Holst(props){ 
    const holstRef = React.useRef(null);
    const [top, setTop] = React.useState(5);
    const [left, setLeft] = React.useState(250);
    const [isMove, setIsMove] = React.useState(false);
    let img = new Image();
    img.src =gradient;
    img.crossOrigin = "Anonymous";

    React.useEffect(()=>{
        const holst =  holstRef.current;
        let canvas = holst.getContext('2d');
        let gradient;

        img.addEventListener('load', ()=>{
            gradient = canvas.createLinearGradient(150, 30, 50, 1050);
            gradient.addColorStop(0, props.holstColor);
            gradient.addColorStop(0.05, props.holstColor);
            gradient.addColorStop(0.72, "white");
            gradient.addColorStop(0.63, "black");
            gradient.addColorStop(1, "black");
            canvas.fillStyle = gradient;
            canvas.fillRect(0,0,256,256);
            canvas.drawImage(img,0,0);
            canvas.crossOrigin = "Anonymous";
            
        })

       
    },[])



    const componentToHex = (c) => {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

 

    const wichColor = () =>{
        const holst =  holstRef.current;
        let canvas = holst.getContext('2d');
        canvas.crossOrigin = "Anonymous";

        const dataColor = canvas.getImageData(left, top, 1, 1).data;
        props.changeSelectColor(`#${componentToHex(dataColor[0])}${componentToHex(dataColor[1])}${componentToHex(dataColor[2])}`);
    }

    const startSelect = ({nativeEvent}) =>{
        setIsMove(true);
        const {offsetX,offsetY} = nativeEvent;
        setTop(offsetY);
        setLeft(offsetX);
        wichColor();
    }

    const endSelect = () =>{
        setIsMove(false);
    }

    const leaveSelect = () =>{
        setIsMove(false);
        wichColor();
    }
    const moveSelect = ({nativeEvent}) =>{
        if (isMove){
            const {offsetX,offsetY} = nativeEvent;
            setTop(offsetY);
            setLeft(offsetX);   
            wichColor();
        }
    }


    React.useEffect(()=>{
        const holst =  holstRef.current;
        let canvas = holst.getContext('2d');
        let gradient;

        canvas.clearRect(0,0,256,256);
        gradient = canvas.createLinearGradient(150, 30, 50, 1050);
        gradient.addColorStop(0, props.holstColor);
        gradient.addColorStop(0.05, props.holstColor);
        gradient.addColorStop(0.72, "white");
        gradient.addColorStop(0.63, "black");
        gradient.addColorStop(1, "black");
        canvas.fillStyle = gradient;
        canvas.fillRect(0,0,256,256);
        canvas.drawImage(img,0,0);
      
        
        wichColor();
    }, [props.holstColor]);

    return(
        <div
        onMouseUp={(e) =>  endSelect(e)}
        onMouseLeave={()=> leaveSelect()}
        className="color__pickerItem color__pickerHolst">
            <canvas
            onMouseDown={(e) => startSelect(e)}
            onMouseMove={(e) =>  moveSelect(e)}
             ref={holstRef} className="holst" width="256px" height="256px">
                ?????????????????? ????????????
            </canvas>
            <div style={{top: top, left: left}}  className={classNames("color__pick color__holstPick",{"color__holstPick--white":top > 130})}></div>
        </div>
    )
}

export default Holst;