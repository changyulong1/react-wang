import React from "react";
import {useTags} from "../useTags";
import {useParams} from "react-router-dom";


const Tag:React.FC =(props)=>{
    const {getTag} = useTags()
    const id = useParams().id|| ''
    const tag = getTag(id)
    return(
        <div>{tag.name}</div>
    )
}
export {Tag}