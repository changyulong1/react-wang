import styled from "styled-components";
import React, {useState} from "react";

const Parent = styled.section`
  > ul {
    display: flex;
    font-size: 24px;

    > li {
      width: 50%;
      background: #C4C4C4;
      text-align: center;
      padding: 18px 0;
      position: relative;

      &.select::before {
        content: "";
        display: block;
        width: 100%;
        height: 4px;
        background: #333333;
        position: absolute;
        bottom: 0;
      }
    }
  }
`;
type Props={
    value:string
    onChange:(value:('-'|'+'))=>void
}
const CategorySection: React.FC<Props> = (Props) => {
    const TypeObj = {"-": "支出", "+": '收入'};
    const [typeLisst] = useState<('+' | '-')[]>(['-', '+']);
    const type= Props.value
    return (
        <Parent>
            <ul>
                {typeLisst.map(c =>
                    <li key={c} className={type === c ? "select" : ' '}
                        onClick={() => {
                            Props.onChange(c);
                        }}
                    >{TypeObj[c]}
                    </li>)}
            </ul>
        </Parent>
    );
};

export {CategorySection};