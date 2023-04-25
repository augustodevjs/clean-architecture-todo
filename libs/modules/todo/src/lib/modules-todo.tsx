import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ModulesTodoProps {}

const StyledModulesTodo = styled.div`
  color: pink;
`;

export function ModulesTodo(props: ModulesTodoProps) {
  return (
    <StyledModulesTodo>
      <h1>Welcome to ModulesTodo!</h1>
    </StyledModulesTodo>
  );
}

export default ModulesTodo;
