import {useEffect, useState} from "react";
import {TagId} from "./lib/tagId";

const useTags = () => {
    const [tags, setTags] = useState<{ id: number, name: string }[]>([]);
    const getTag = (id:string) =>{return tags.filter(tag => tag.id.toString() === id)[0]}
    useEffect(()=>{
        let TagData = JSON.parse(window.localStorage.getItem('tags')||'[]')
        if(TagData.length===0){
            TagData = [
                {id: TagId(), name: '衣'},
                {id: TagId(), name: '食'},
                {id: TagId(), name: '住'},
                {id: TagId(), name: '行'}
            ]
        }
        setTags(TagData)
    },[])
    useEffect(()=>{
        window.localStorage.setItem("tags",JSON.stringify(tags))
    },[tags])
    const IndexId = (id:number)=>{
        let rest = -1
        for(let i =0;i<=tags.length;i++){
            if(tags[i].id === id){
                rest = i
                break
            }
        }
        return rest
    }
    const updateTag = (id:number,Obj:{name:string})=>{
        setTags(tags.map(tag => tag.id === id ? {id, name: Obj.name} : tag))
    }
    const deleteTag = (id:number)=>{
        setTags(tags.filter(tag=> tag.id!==id))
    }
    const addTag=()=>{
        const tagName= window.prompt('请输入标签名')
        if(tagName!==null){
            setTags([...tags,{id:TagId(),name:tagName}])
        }
    }
    return {
        tags,
        setTags,
        getTag,
        updateTag,
        IndexId,
        deleteTag,
        addTag
    };
};

export {useTags};