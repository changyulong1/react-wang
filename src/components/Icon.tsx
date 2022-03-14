import React from "react";

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props ={
    name: string
    onClick?:()=>void
}
const Icon:React.FC<Props> = (props) =>{
    const {onClick} = props
    return(
        <svg className="icon" onClick={onClick}>
            <use xlinkHref={"#"+props.name}/>
        </svg>
    )
}

export default Icon