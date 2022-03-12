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
            <NumberPadSection/>
        </MyLayout>
    );
};
export default Tab;