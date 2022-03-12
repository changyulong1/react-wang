import styled from "styled-components";
import React, {ChangeEvent} from "react";

const Remarks = styled.section`
  padding: 0 16px;
  font-size: 14px;

  > label {
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
  }
`;
type Props={
    value:string
    onChange:(value:string)=>void
}
const  NotesSection:React.FC<Props> =(Props)=>{
    const val = Props.value
    const addText = (e:ChangeEvent)=>{
        const taxt = (e.target as HTMLInputElement).value
        Props.onChange(taxt)
    }
    return(
        <Remarks>
            <label>
                <span>备注</span>
                <input
                    type="text"
                    placeholder="请填写备注"
                    value={val}
                    onChange={addText}
                />
            </label>
        </Remarks>
    )
}
export {NotesSection}