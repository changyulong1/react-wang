import Layout from "../components/Layout";
import React, {useState} from "react";
import styled from "styled-components";
import {Tags} from "../components/Money/TagsSection";
import {NotesSection} from "../components/Money/NotesSection";
import {CategorySection} from "../components/Money/CategorySection";
import {NumberPadSection} from "../components/Money/NumberPadSection";

const MyLayout = styled(Layout)`
    display: flex;
  flex-direction: column;
`
type Category = '-' | '+'
const Tab = () => {
    const [data,setData] = useState({
        tags:[] as string[],
        note:'',
        category: '-' as Category,
        amount: '0'
    })
    return (
        <MyLayout className="main">
            {data.tags}
            <hr/>
            {data.note}
            <hr/>
            {data.category}
            <hr/>
            {data.amount}
            <Tags value={data.tags} onChange={(value)=>{
                setData({
                    ...data,
                    tags:value
                })
            }}/>
            <NotesSection value={data.note}
                          onChange={(value)=>{
                               setData({
                                   ...data,
                                   note:value
                               })
                          }}
            />
            <CategorySection value={data.category}
                             onChange={(value)=>{
                                    setData({
                                        ...data,
                                        category:value
                                    })
                             }}
            />
            <NumberPadSection value={data.amount}
                              onChange={(value)=>{
                                  setData({
                                      ...data,
                                      amount:value
                                  })
                              }}/>
        </MyLayout>
    );
};
export default Tab;