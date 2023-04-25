import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedCoreProps {}

const StyledSharedCore = styled.div`
  color: pink;
`;

export function SharedCore(props: SharedCoreProps) {
  return (
    <StyledSharedCore>
      <h1>Welcome to SharedCore!</h1>
    </StyledSharedCore>
  );
}

export default SharedCore;
