import styled from "styled-components";

export const ButtonContainer = styled.button`
  font-size: 1.4rem;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  background: transparent;
  border: 0.2rem solid var(--lightBlue);
  border-color:var(--lightBlue);
  color:var(--lightBlue);
  border-radius: 0.8rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.4s ease-in-out;
  &:hover {
    background:var(--lightBlue);
    color: var(--mainBlue);
  }

  &:focus {
    outline: none;
  }
`;
