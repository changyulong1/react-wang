import React from "react";
import {useTags} from "../useTags";
import {useParams} from "react-router-dom";
import Layout from "../components/Layout";
import {Button} from "../components/Button";
import Icon from "../components/Icon";
import styled from "styled-components";
import {Input} from "../components/Input";
import {Center} from "../components/Center";

const TagBag = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  padding: 9px 24px;
  background: #ffff;
`;
const TagName = styled.div`
  background: #ffff;
  margin: 8px 0;
  padding: 0 16px;
`;
const Tag: React.FC = (props) => {
    const {getTag, updateTag, deleteTag} = useTags();
    const idString = useParams().id || '';
    const tag = getTag(idString);
    return (
        <Layout>
            <TagBag>
                <Icon name="right"/>
                <span>编辑标签</span>
                <span></span>
            </TagBag>
            {tag? <div>

                <TagName>
                    <Input text="标签名" type="text"
                           placeholder="标签名"
                           value={tag.name}
                           onChange={(e) => {
                               console.log(e.target.value);
                               updateTag(tag.id, {name: e.target.value});
                           }
                           }
                    />
                </TagName>
                <Center>
                    <Button onClick={() => {
                        deleteTag(tag.id);
                    }}>编辑标签</Button>
                </Center>
            </div>:<div>没有这个标签</div>}

        </Layout>
    );
};
export {Tag};