import styled from "styled-components";
import React, {useState} from "react";

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

const  NotesSection:React.FC =()=>{
    const [val,setVal]=useState('')
    return(
        <Remarks>
            <label>
                <span>备注</span>
                <input
                    type="text"
                    placeholder="请填写备注"
                    value={val}
                    onChange={(e=>setVal(e.target.value))}
                />
            </label>
        </Remarks>
    )
}
export {NotesSection}