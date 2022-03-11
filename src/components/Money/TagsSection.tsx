import styled from "styled-components";
import React, {useState} from "react";


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

const Tags: React.FC = () => {
    const [tags,setTags] = useState<string[]>(['衣','食','住','行'])
    const [tagList,settagList] = useState<string[]>([])
    const addTag=()=>{
        const tagName= window.prompt('请输入标签名')
        if(tagName!==null){
            setTags([...tags,tagName])
        }
    }
    const selectorTag= (tag:string)=>{
        const index = tagList.indexOf(tag)
        if(index>=0){
            settagList(tagList.filter(t=>t!==tag))
        }else{
            console.log(index);
            settagList([...tagList,tag])
        }

    }
    const getClass =(tag:string)=>tagList.indexOf(tag)>=0?'select':''
    return (
        <TagsSection>
            <ol>
                {tags.map((tag=>{
                   return <li key={tag}
                   onClick={()=>{selectorTag(tag)}} className={getClass(tag)}>{tag}</li>
                }))}
            </ol>
            <button onClick={addTag}>新增标签</button>
        </TagsSection>
    );
};
export {Tags};