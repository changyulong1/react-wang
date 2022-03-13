import styled from "styled-components";
import React from "react";
import {useTags} from "../../useTags";
import {TagId} from "../../lib/tagId";


const TagsSection = styled.section`
  background: #FFFF;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  > ol {
    margin: 0 -12px;

    > li {
      display: inline-block;
      font-size: 14px;
      padding: 4px 18px;
      background: #D9D9D9;
      border-radius: 18px;
      margin: 10px 12px;
      &.select{
        background: red;
      }
    }
  }

  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #666666;
    color: #999999;
    margin-top: 18px;
  }
`;
type Props={
    value:string[]
    onChange:(value:string[])=>void
}
const Tags: React.FC<Props> = (Props) => {
    const {tags,setTags} = useTags()
    const tagList = Props.value
    const addTag=()=>{
        const tagName= window.prompt('请输入标签名')
        if(tagName!==null){
            setTags([...tags,{id:TagId(),name:tagName}])
        }
    }
    const selectorTag= (tag:string)=>{
        const index = tagList.indexOf(tag)
        if(index>=0){
            Props.onChange(tagList.filter(t=>t!==tag))
        }else{
            Props.onChange([...tagList,tag])
        }

    }
    const getClass =(tag:string)=>tagList.indexOf(tag)>=0?'select':''
    return (
        <TagsSection>
            <ol>
                {tags.map((tag=>{
                   return <li key={tag.id}
                   onClick={()=>{selectorTag(tag.name)}} className={getClass(tag.name)}>{tag.name}</li>
                }))}
            </ol>
            <button onClick={addTag}>新增标签</button>
        </TagsSection>
    );
};
export {Tags};