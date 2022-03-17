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
const Wrap = styled.div`
  background: #C4C4C4;
`
type Category = '-' | '+'
const Tab = () => {
    const [data,setData] = useState({
        tags:[] as string[],
        note:'',
        category: '-' as Category,
        amount: '0'
    })
    const onChange = (obj:Partial<typeof data>)=>{
        setData({
            ...data,
            ...obj
        })
    }
    return (
        <MyLayout className="main">
            <Tags value={data.tags} onChange={(tags)=>onChange({tags})}/>
            <NotesSection value={data.note}
                          onChange={(note)=>onChange({note})}
            />
            <Wrap>
                <CategorySection value={data.category}
                                 onChange={(category)=>onChange({category})}
                />
            </Wrap>
            <NumberPadSection value={data.amount}
                              arr={data}
                              onChange={(amount)=>onChange({amount})}/>
        </MyLayout>
    );
};
export default Tab;