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

export const Form = styled.form`
  h2 {
    font-size: 22px;
    font-weight: 600;
    color: #e1e1e6;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    &::before {
      content: '';
      display: inline-block;
      width: 7px;
      height: 27px;
      background-color: #00b37e;
    }
  }
  button {
    margin: 1rem 0 1.5rem 0;
    padding: 0.75rem;
  }
`;

export const ContainerLoading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
