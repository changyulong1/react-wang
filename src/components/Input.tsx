import React from "react";
import styled from "styled-components";

const Label = styled.label`
    display: flex;
    align-items: center;
    > span {
      margin-right: 16px;
      white-space: nowrap;
    }

    > input {
      background: none;
      border: none;
      height: 73px;
      width: 100%;
      outline: none;
    }
  
`
type Props = {
    text:string;
}& React.InputHTMLAttributes<HTMLInputElement>
const Input:React.FC<Props>= (Props)=>{
    const {text,children,...rest} =Props
    return(
        <Label>
            <span>{Props.text}</span>
            <input {...rest}/>
        </Label>
    )
}

export {Input}
