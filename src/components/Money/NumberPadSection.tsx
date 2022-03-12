import styled from "styled-components";
import React, {useState} from "react";

const Parent = styled.section`
  display: flex;
  flex-direction: column;
  > .number {
    font-size: 36px;
    text-align: right;
    line-height: 72px;
    background: #ffff;
    padding: 0 16px;
    box-shadow: inset 0px -2px 3px rgba(0, 0, 0, 0.25);
  }
  > .buts {
    > button {
      font-size: 18px;
      width: 25%;
      height: 64px;
      float: left;
      border: none;

      &.ok {
        height: 128px;
        float: right;
      }

      &.ling {
        width: 50%;
      }

      &:nth-child(1) {
        background: #F2F2F2;
      }

      &:nth-child(2),
      &:nth-child(5) {
        background: #E0E0E0;
      }

      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: #D3D3D3;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10){
        background: #C1C1C1;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13){
        background: #A9A9A9;
      }
      &:nth-child(12){
        background: #9A9A9A;
      }
      &:nth-child(14){
        background: #8B8B8B;
      }
    }
  }
`;
const NumberPadSection:React.FC = ()=>{
    const [number,_setNumber] = useState('0')
    const setNumber=(nubmer:string)=>{
        if(number.length>=16){
            nubmer=nubmer.slice(0,16)
        }else if(number.length===0){
            nubmer="0"
        }
        _setNumber(nubmer)
    }
    const componentText =(e:React.MouseEvent)=>{
        const text = (e.target as HTMLButtonElement).textContent
        if(text===null){return}
        switch(text){
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                if(number === '0'){
                    setNumber(text)
                }else{
                    setNumber(number+text)
                }
                break
            case '.':
                if(number.indexOf('.')>=1){
                    return
                }else{
                    setNumber(number+'.')
                }
                break
            case '删除':
               if(number.length ===1){
                   setNumber('0')
               }else{
                   setNumber(number.slice(0,-1))
               }
                break
            case '清空':
                setNumber('0')
                break
            case 'ok':
                console.log('ok')
                break
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