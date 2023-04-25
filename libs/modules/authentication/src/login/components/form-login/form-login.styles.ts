import styled from 'styled-components';

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
