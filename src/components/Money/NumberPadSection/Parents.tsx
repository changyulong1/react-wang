import styled from "styled-components";

const Parent = styled.section`
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
export {Parent}