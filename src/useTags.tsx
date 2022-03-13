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
    return {
        tags,
        setTags,
        getTag
    };
};

export {useTags};