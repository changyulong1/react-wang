import styled from "styled-components";
import React from "react";
import {useTags} from "../../hoosk/useTags";


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
    const {tags,addTag} = useTags()
    const tagList = Props.value
    const selectorTag= (tagId:string)=>{
        const index = tagList.indexOf(tagId)
        if(index>=0){
            Props.onChange(tagList.filter(t=>t!==tagId))
        }else{
            Props.onChange([...tagList,tagId])
        }

    }
    const getClass =(tag:string)=>tagList.indexOf(tag)>=0?'select':''
    return (
        <TagsSection>
            <ol>
                {tags.map((tag=>{
                   return <li key={tag.id}
                   onClick={()=>{selectorTag(tag.id.toString())}} className={getClass(tag.id.toString())}>{tag.name}</li>
                }))}
            </ol>
            <button onClick={()=>addTag()}>新增标签</button>
        </TagsSection>
    );
};
export {Tags};