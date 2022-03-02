import styled from "styled-components";

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

export {CategorySection}