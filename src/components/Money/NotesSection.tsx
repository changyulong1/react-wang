import styled from "styled-components";
import React, {ChangeEvent} from "react";
import {Input} from "../Input";

const Remarks = styled.section`
  padding: 0 16px;
  font-size: 14px;
  
`;
type Props={
    value:string
    onChange:(value:string)=>void
}
const  NotesSection:React.FC<Props> =(Props)=>{
    const val = Props.value
    const addText = (e:ChangeEvent)=>{
        console.log(666)
        const taxt = (e.target as HTMLInputElement).value
        Props.onChange(taxt)
    }
    return(
        <Remarks>
            <Input text='备注' type='text'
                   placeholder='请输入备注'
                   value={val}
                   onChange={addText}
            />
        </Remarks>
    )
}
export {NotesSection}