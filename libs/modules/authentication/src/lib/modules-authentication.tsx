import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ModulesAuthenticationProps {}

const StyledModulesAuthentication = styled.div`
  color: pink;
`;

export function ModulesAuthentication(props: ModulesAuthenticationProps) {
  return (
    <StyledModulesAuthentication>
      <h1>Welcome to ModulesAuthentication!</h1>
    </StyledModulesAuthentication>
  );
}

export default ModulesAuthentication;
