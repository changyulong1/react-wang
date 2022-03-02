import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";

const TagsSection = styled.section`
  background: #FFFF;
  padding: 12px 16px;

  > ol {
    margin: 0 -12px;

    > li {
      display: inline-block;
      font-size: 14px;
      padding: 4px 18px;
      background: #D9D9D9;
      border-radius: 18px;
      margin: 10px 12px;
    }
  }

  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #666666;
    color: #999999;
    margin-top: 18px;
  }

`;
const NotesSection = styled.section`
  padding: 0 16px;
  font-size: 14px;

  > label {
    display: flex;
    align-items: center;

    > span {
      margin-right: 16px;
      white-space: nowrap;
    }

    > input {
      background: none;
      border: none;
      height: 73px;
      width: 100%;
      outline: none;
    }
  }
`;
const CategorySection = styled.section`
  > ul {
    display: flex;
    font-size: 24px;

    > li {
      width: 50%;
      background: #C4C4C4;
      text-align: center;
      padding: 18px 0;
      position: relative;

      &.selector::before {
        content: "";
        display: block;
        width: 100%;
        height: 4px;
        background: #333333;
        position: absolute;
        bottom: 0;
      }
    }
  }
`;
const NumberPadSection = styled.section``;


const Tab = () => {
    return (
        <Layout>
            <TagsSection>
                <ol>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                </ol>
                <button>新增标签</button>
            </TagsSection>
            <NotesSection>
                <label>
                    <span>备注</span>
                    <input type="text" placeholder="请填写备注"/>
                </label>
            </NotesSection>
            <CategorySection>
                <ul>
                    <li className="selector">支出</li>
                    <li>收入</li>
                </ul>
            </CategorySection>
            <NumberPadSection>
                <div>100</div>
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
                <button>ok</button>
                <button>0</button>
                <button>.</button>
            </NumberPadSection>
        </Layout>
    );
};
export default Tab;