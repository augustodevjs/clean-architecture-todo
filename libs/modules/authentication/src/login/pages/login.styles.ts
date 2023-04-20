import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  padding: 3rem 2rem;
  background-color: #202024;
  border-radius: 6px;
  a {
    font-weight: 600;
    font-size: 14px;
    color: #00875f;
    transition: filter 0.2s linear;
    align-self: center;
    &:hover {
      filter: brightness(1.3);
    }
  }
`;
