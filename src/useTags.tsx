import {useState} from "react";
import {TagId} from "./lib/tagId";

const usrTagId = [
    {id: TagId(), name: '衣'},
    {id: TagId(), name: '食'},
    {id: TagId(), name: '住'},
    {id: TagId(), name: '行'}
];

const useTags = () => {
    const [tags, setTags] = useState<{ id: number, name: string }[]>(usrTagId);
    const getTag = (id:string) =>{
        const tag = tags.filter(tag => tag.id.toString() === id)[0]
        return tag
    }
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
        const index = IndexId(id)
        const gscLone = JSON.parse(JSON.stringify(tags))
        gscLone.splice(index,1,{id:id,name:Obj.name})
        setTags(gscLone)
    }
    const deleteTag = (id:number)=>{
        const index = IndexId(id)
        const gscLone = JSON.parse(JSON.stringify(tags))
        gscLone.splice(index,1)
        setTags(gscLone)

    }

    return {
        tags,
        setTags,
        getTag,
        updateTag,
        IndexId,
        deleteTag
    };
};

export {useTags};