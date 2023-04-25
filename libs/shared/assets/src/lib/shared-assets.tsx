import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedAssetsProps {}

const StyledSharedAssets = styled.div`
  color: pink;
`;

export function SharedAssets(props: SharedAssetsProps) {
  return (
    <StyledSharedAssets>
      <h1>Welcome to SharedAssets!</h1>
    </StyledSharedAssets>
  );
}

export default SharedAssets;
