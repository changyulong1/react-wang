import {useState} from "react";
import {TagId} from "./lib/tagId";


const useTags=()=>{
    const [tags,setTags] = useState<{id:number,name:string}[]>(
        [
            {id:TagId(),name:'衣'},
            {id:TagId(),name:'食'},
            {id:TagId(),name:'住'},
            {id:TagId(),name:'行'}
        ]
    )
    return {
        tags:tags,
        setTags:setTags
    }
}

export {useTags}