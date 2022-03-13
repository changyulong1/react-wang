import React from "react";
import {useTags} from "../useTags";
import {useParams} from "react-router-dom";
import Layout from "../components/Layout";
import {Button} from "../components/Button";
import Icon from "../components/Icon";
import styled from "styled-components";

const TagBag = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
 
  padding: 9px 24px;
  background: #ffff;

`;

const Tag: React.FC = (props) => {
    const {getTag} = useTags();
    const id = useParams().id || '';
    const tag = getTag(id);
    return (
        <Layout>
            <TagBag>
                <Icon name="right"/>
                <span>编辑标签</span>
                <span></span>
            </TagBag>
            <div>
                <label>
                    <span>标签名</span>
                    <input
                        type="text"
                        placeholder={tag.name}
                    />
                </label>
            </div>
            <div>
                <Button>编辑标签</Button>
            </div>
        </Layout>
    );
};
export {Tag};