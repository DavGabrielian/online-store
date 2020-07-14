import styled from "styled-components";

export const BackCss = styled.section`
  #main {
    display: grid;
    grid-template-columns: 0fr 2fr;
  }

  #main .main-text {
    margin: 20px 150px;
    font-weight: 600;
    line-height: 1.5;
  }

  #main .home {
    left: 28rem;
    position: fixed;
  }
`;
