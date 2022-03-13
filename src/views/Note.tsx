import Layout from "../components/Layout";
import React from "react";
import {useTags} from "../useTags";
import styled from "styled-components";
import Icon from "../components/Icon";
import {NavLink} from "react-router-dom";

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
const Button = styled.button`
    font-size: 18px;border: none;
    padding: 9px 8px;background: #767676;
    color: #ffff;
`
const Center =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 44px;
`
const Note = ()=>{
    const {tags}=useTags()
    return(
        <Layout>
            <TagList>
                {tags.map(tag=>
                    <li key={tag.id}>
                        <NavLink to={`/Note:${tag.name}`}>
                            <span className='oneLien'>{tag.name}</span>
                            <span></span>
                            <Icon name='left'></Icon>
                        </NavLink>

                    </li>
                )}
            </TagList>
            <Center>
                <Button>添加标签</Button>
            </Center>
        </Layout>
    )
}

export default Note