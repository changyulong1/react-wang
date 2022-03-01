import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";
import  x from 'icons/money.svg'
import b from "icons/Chart.svg"
import c from "icons/note.svg"
console.log(c)
console.log(b)
console.log(x)
const NavRep = styled.div`
    > ul{
      box-shadow: 0 0 3px rgba(0,0,0,0.35);
      display: flex;
      li{
        line-height: 24px;
        width: 33.333%;
        padding: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
`
const Nav = ()=>{
    return (
        <NavRep>
            <ul>
                <li>
                    <svg className="icon">
                        <use xlinkHref="#money"/>
                    </svg>
                    <Link to="/Tab">标签页</Link>
                </li>
                <li>
                    <svg className="icon">
                        <use xlinkHref="#note"/>
                    </svg>
                    <Link to="/Note">笔记页</Link>
                </li>
                <li>
                    <svg className="icon">
                        <use xlinkHref="#Chart"/>
                    </svg>
                    <Link to="/Statistics">统计页</Link>
                </li>
            </ul>
        </NavRep>
    )
}

export default Nav