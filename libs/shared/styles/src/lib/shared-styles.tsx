import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedStylesProps {}

const StyledSharedStyles = styled.div`
  color: pink;
`;

export function SharedStyles(props: SharedStylesProps) {
  return (
    <StyledSharedStyles>
      <h1>Welcome to SharedStyles!</h1>
    </StyledSharedStyles>
  );
}

export default SharedStyles;
