import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";

const TagsSection = styled.section`
  background: #FFFF;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
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
const NumberPadSection = styled.section`
  display: flex;
  flex-direction: column;

  > .number {
    font-size: 36px;
    text-align: right;
    line-height: 72px;
    background: #ffff;
    padding: 0 16px;
    box-shadow: inset 0px -2px 3px rgba(0, 0, 0, 0.25);
  }

  > .buts {
    > button {
      font-size: 18px;
      width: 25%;
      height: 64px;
      float: left;
      border: none;

      &.ok {
        height: 128px;
        float: right;
      }

      &.ling {
        width: 50%;
      }

      &:nth-child(1) {
        background: #F2F2F2;
      }

      &:nth-child(2),
      &:nth-child(5) {
        background: #E0E0E0;
      }

      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: #D3D3D3;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10){
        background: #C1C1C1;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13){
        background: #A9A9A9;
      }
      &:nth-child(12){
        background: #9A9A9A;
      }
      &:nth-child(14){
        background: #8B8B8B;
      }
    }
  }
`;

const MyLayout = styled(Layout)`
    display: flex;
  flex-direction: column;
`

const Tab = () => {
    return (
        <MyLayout className="main">
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