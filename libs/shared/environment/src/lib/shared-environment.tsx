import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedEnvironmentProps {}

const StyledSharedEnvironment = styled.div`
  color: pink;
`;

export function SharedEnvironment(props: SharedEnvironmentProps) {
  return (
    <StyledSharedEnvironment>
      <h1>Welcome to SharedEnvironment!</h1>
    </StyledSharedEnvironment>
  );
}

export default SharedEnvironment;
