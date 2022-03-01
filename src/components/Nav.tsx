import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";
import x from "icons/money.svg"
console.log(x)
const NavRep = styled.div`
    > ul{
      box-shadow: 0 0 3px rgba(0,0,0,0.35);
      display: flex;
      li{
        line-height: 24px;
        width: 33.333%;
        text-align: center;
        padding: 16px;
      }
    }
`
const Nav = ()=>{
    return (
        <NavRep>
            <ul>
                <li>
                    <Link to="/Tab">标签页</Link>
                </li>
                <li>
                    <Link to="/Note">笔记页</Link>
                </li>
                <li>
                    <Link to="/Statistics">统计页</Link>
                </li>
            </ul>
        </NavRep>
    )
}

export default Nav