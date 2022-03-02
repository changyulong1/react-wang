import styled from "styled-components";
import React from "react";
import Icon from "./Icon";
import { NavLink } from "react-router-dom";
const NavRep = styled.div`
    > ul{
      box-shadow: 0 0 3px rgba(0,0,0,0.35);
      display: flex;
      li{
        line-height: 24px;
        width: 33.333%;
        a{
        display: flex;
        padding: 4px 0;
        flex-direction: column;
        align-items: center; 
          &.selected{
            color: red;
          }
          .icon{
            width: 24px;
            height: 24px;
            fill: red;
          }
        }
      }
    }
`
const Nav = ()=>{
    return (
        <NavRep>
            <ul>
                <li>
                    <NavLink to="/Tab" className={({ isActive }) => (isActive ? "selected" : "")}>
                        <Icon name="note"/>
                        标签页
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Note" className={({ isActive }) => (isActive ? "selected" : "")}>
                        <Icon name="money"/>
                        笔记页
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Statistics" className={({ isActive }) => (isActive ? "selected" : "")}>
                        <Icon name="Chart"/>
                        统计页
                    </NavLink>
                </li>
            </ul>
        </NavRep>
    )
}

export default Nav