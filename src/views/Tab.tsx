import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";
import {Tags} from "../components/Money/TagsSection";
import {NotesSection} from "../components/Money/NotesSection";
import {CategorySection} from "../components/Money/CategorySection";
import {NumberPadSection} from "../components/Money/NumberPadSection";

const MyLayout = styled(Layout)`
    display: flex;
  flex-direction: column;
`

const Tab = () => {
    return (
        <MyLayout className="main">
            <Tags/>
            <NotesSection/>
            <CategorySection/>
            <NumberPadSection>
                <div className="number">
                    100
                </div>
                <div className="buts clearFix">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>清空</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button className="ok">ok</button>
                    <button className="ling">0</button>
                    <button className="spot">.</button>
                </div>
            </NumberPadSection>
        </MyLayout>
    );
};
export default Tab;