import React from "react";

function Holst(props){
    const holstRef = React.useRef(null);
    const [top, setTop] = React.useState(5);
    const [left, setLeft] = React.useState(250);
    const [isMove, setIsMove] = React.useState(false);
    let img = new Image();
    img.src = 'https://lh3.googleusercontent.com/-8Dm4nhAOssQ/T_IqwyIFXmI/AAAAAAAAACA/4QKmS7s_otE/s256/bgGradient.png';
    img.crossOrigin = "Anonymous";

    React.useEffect(()=>{
        const holst =  holstRef.current;
        let canvas = holst.getContext('2d');
        let gradient;

        img.addEventListener('load', ()=>{
            gradient = canvas.createLinearGradient(150, 30, 50, 1050);
            gradient.addColorStop(0, props.holstColor);
            gradient.addColorStop(1, "white");
            canvas.fillStyle = gradient;
            canvas.fillRect(0,0,256,256);
            canvas.drawImage(img,0,0);
            canvas.crossOrigin = "Anonymous";
            console.log(canvas.getImageData(255, 255, 1, 1));
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
        gradient.addColorStop(0,  props.holstColor);
        gradient.addColorStop(0.95, "white");
        gradient.addColorStop(1, "black");
        canvas.fillStyle = gradient;
        canvas.fillRect(0,0,256,256);
        canvas.drawImage(img,0,0);
        canvas.crossOrigin = "Anonymous";
        
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
                Произошла ошибка
            </canvas>
            <div style={{top: top, left: left}} className="color__pick color__holstPick"></div>
        </div>
    )
}

export default Holst;