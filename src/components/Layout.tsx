import Nav from "./Nav";
import React from "react";
import styled from "styled-components";
const Parent = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Rout = styled.div`
  flex-grow: 1;
`;

const Layout = (props:any)=>{
    return(
        <Parent>
            <Rout className={props.className}>
                {props.children}
            </Rout>
            <Nav/>
        </Parent>
    )
}
export default Layout