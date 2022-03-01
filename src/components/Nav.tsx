import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";
import Icon from "./Icon";
const NavRep = styled.div`
    > ul{
      box-shadow: 0 0 3px rgba(0,0,0,0.35);
      display: flex;
      li{
        line-height: 24px;
        width: 33.333%;
        display: flex;
        padding: 4px 0;
        flex-direction: column;
        align-items: center;
        .icon{
          width: 24px;
          height: 24px;
        }
      }
    }
`
const Nav = ()=>{
    return (
        <NavRep>
            <ul>
                <li>
                    <Icon name="note"/>
                    <Link to="/Tab">标签页</Link>
                </li>
                <li>
                    <Icon name="money"/>
                    <Link to="/Note">笔记页</Link>
                </li>
                <li>
                    <Icon name="Chart"/>
                    <Link to="/Statistics">统计页</Link>
                </li>
            </ul>
        </NavRep>
    )
}

export default Nav