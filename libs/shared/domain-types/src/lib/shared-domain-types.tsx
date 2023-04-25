import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedDomainTypesProps {}

const StyledSharedDomainTypes = styled.div`
  color: pink;
`;

export function SharedDomainTypes(props: SharedDomainTypesProps) {
  return (
    <StyledSharedDomainTypes>
      <h1>Welcome to SharedDomainTypes!</h1>
    </StyledSharedDomainTypes>
  );
}

export default SharedDomainTypes;
