import {useEffect, useState} from "react";
import {useUpdata} from "./useUpdata";

export type ListData ={
    tags:string[],
    note:string,
    category: '-'|'+' ,
    amount: string
    day:string
}

 export type nowListData=Omit<ListData, 'day'>


const useList =()=>{
    const [datalist,setList]=useState<ListData[]>([])

    useEffect(()=>{
        setList(JSON.parse(window.localStorage.getItem('DataList')||'[]'))
    },[])
    useUpdata(()=>{
        window.localStorage.setItem('DataList',JSON.stringify(datalist))
    },[datalist])
    const addList = (arr:nowListData)=>{
        // if(arr.tags.length ==0){
        //     alert('请选标签')
        //     return
        // }
        // if(arr.amount =='0'){
        //     alert('请填写金额')
        //     return
        // }

        const data ={...arr,'day':new Date().toISOString()}
        setList([...datalist,data])
    }

    return {datalist,addList}
}


export {useList}