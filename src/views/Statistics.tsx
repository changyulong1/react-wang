import Layout from "../components/Layout";
import React, {useState} from "react";
import {CategorySection} from "../components/Money/CategorySection";
import styled from "styled-components";
import {ListData, useList} from "../hoosk/useList";
import {useTags} from "../hoosk/useTags";
import day from "dayjs";

const Parent = styled.div`
    background: #ffff;
`
const Content = styled.div`;
  >.paent{
    display: flex;
    justify-content: space-between;
    padding: 16px 16px;
    background: #ffff;
    border-bottom: 1px solid #000;
    >.left{
      margin-right: auto;
      margin-left: 10px;
      color: #999;
    }
  }
  >header{
    font-size: 18px;
    line-height: 20px;
    padding: 10px 16px;
    
  }
    
`
const Statistics:React.FC = ()=>{
    const [value,setValue]= useState('+')
    const {datalist} = useList()
    const {getName} = useTags()
    const hasData:{[k:string]:ListData[]}={}
    const setdata = datalist.filter(r => r.category === value);
    setdata.forEach((r)=>{
        const  key =day(r.day).format('YYYY年MM月DD日')
        if(!(key in hasData)){
            hasData[key] =[]
        }
        hasData[key].push(r)
    })
    const  arr = Object.entries(hasData).sort((a,b)=>{
        if (a[0] === b[0]) return 0;
        if (a[0] > b[0]) return -1;
        if (a[0] < b[0]) return 1;
        return 0;
    })
    return(
        <Layout>
            <Parent>
                <CategorySection value={value} onChange={(value)=>{
                    setValue(value)
                }}> </CategorySection>
            </Parent>
            {arr.map(([title,data])=>{
                return <Content key={title}>
                  <header>{title}</header>
                    {data.map((time,i)=>{
                        return <div className='paent' key={i}>
                            <div>
                                {time.tags.map(id=>{
                                    return <span key={id}>{getName(id)}</span>
                                })}
                            </div>
                            <div className='left'>
                                {time.note}
                            </div>
                            <div>
                                ￥{time.amount}
                            </div>
                        </div>
                    })}
                </Content>
            })}
        </Layout>
    )
}
export default Statistics