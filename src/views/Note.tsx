import Layout from "../components/Layout";
import React from "react";
import {useTags} from "../hoosk/useTags";
import styled from "styled-components";
import Icon from "../components/Icon";
import {NavLink} from "react-router-dom";
import {Button} from "../components/Button";
import {Center} from "../components/Center";

const  TagList = styled.ul`
  background: #ffff;
  padding-left: 10px;
  > li {
    font-size: 16px;
    border-bottom: 1px solid #ccc;
    >a{
      display: flex;
      justify-content: space-between;
      padding: 8px 8px 16px 0;
    }
  }
`

const Note = ()=>{
    const {tags,addTag}=useTags()
    return(
        <Layout>
            <TagList>
                {tags.map(tag=>
                    <li key={tag.id}>
                        <NavLink to={`/Note`+tag.id}>
                            <span className='oneLien'>{tag.name}</span>
                            <span></span>
                            <Icon name='left'></Icon>
                        </NavLink>

                    </li>
                )}
            </TagList>
            <Center>
                <Button onClick={()=>addTag()}>添加标签</Button>
            </Center>
        </Layout>
    )
}

export default Note