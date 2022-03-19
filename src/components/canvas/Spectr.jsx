import React from "react";

function Spectr(props){
    const spectrRef = React.useRef(null);
    const [top, setTop] = React.useState(0);
    const [isMove, setIsMove] = React.useState(false);
    let colorBlock;

    React.useEffect(()=>{
        const spectr = spectrRef.current;
        let colorBlock =spectr.getContext('2d');
        
        let hue = [[255,0,0],[255,255,0],[0,255,0],[0,255,255],[0,0,255],[255,0,255],[255,0,0]];
        let gradient = colorBlock.createLinearGradient(25, 256, 25, 0);
        for (var i=0; i < 7;i++){
		
        let color = 'rgb('+hue[i][0]+','+hue[i][1]+','+hue[i][2]+')';

        gradient.addColorStop(i*1/6, color);

        };
                        
        colorBlock.fillStyle = gradient;
        colorBlock.fillRect(0,0,30,256);
    }, [])


    const componentToHex = (c) => {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

 

    const wichColor = () =>{
        const spectr = spectrRef.current;
        let colorBlock =spectr.getContext('2d');

        const dataColor = colorBlock.getImageData(1, top, 1, 1).data;
        props.changeHolst(`#${componentToHex(dataColor[0])}${componentToHex(dataColor[1])}${componentToHex(dataColor[2])}`);
    }

    const startSelect = ({nativeEvent}) =>{
        setIsMove(true);
        const {offsetY} = nativeEvent;
        setTop(offsetY);
        wichColor();
    }

    const endSelect = () =>{
        setIsMove(false);
        wichColor();
    }

    const leaveSelect = () =>{
        setIsMove(false);
        wichColor();
    }

    const moveSelect = ({nativeEvent}) =>{
        if (isMove){
            const {offsetY} = nativeEvent;
            setTop(offsetY); 
            wichColor();
        }
    }

    

    return(
        <div
        onMouseUp={(e) =>  endSelect(e)}
        onMouseLeave={() => leaveSelect()}
        className="color__pickerItem color__pickerSpectr">
            <canvas 
            onMouseDown={(e) => startSelect(e)}
            onMouseMove={(e) =>  moveSelect(e)}
            ref={spectrRef} className="spectr" width="30px" height="256px">
                Произошла ошибка
            </canvas>
            <div style={{top: top}} className="color__pick color__spectrPick"></div>
        </div>
    )
}

export default Spectr;