import React from "react";
import {Parent} from "./NumberPadSection/Parents";
import {getNumber} from "./NumberPadSection/gitNumber";

type Props = {
    value:string
    onChange:(value:string)=>void
}
const NumberPadSection:React.FC<Props> = (Props)=>{
    // const [number,_setNumber] = useState('0')
    const number = Props.value.toString()
    const setNumber=(nubmer:string)=>{
        let value
        if(number.length>=16){
            value=nubmer.slice(0,16)
        }else if(number.length===0){
            value="0"
        }else{
            value=nubmer
        }
        Props.onChange(value)
    }
    const componentText =(e:React.MouseEvent)=>{
        const text = (e.target as HTMLButtonElement).textContent
        if(text===null){return}
        if(text==="ok"){
            console.log('ok')
        }
        if('0123456789.'.split('').concat(['删除', '清空']).indexOf(text) >= 0){
            setNumber(getNumber(text,number))
        }
    }
    return(
        <Parent>
            <div className="number">
                {number}
            </div>
            <div className="buts clearFix" onClick={componentText}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="ok">ok</button>
                <button className="ling">0</button>
                <button className="spot">.</button>
            </div>
        </Parent>
    )
}
export {NumberPadSection}