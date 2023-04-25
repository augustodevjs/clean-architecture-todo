import styled from "styled-components"

export const IconGroup = styled.div`
  display: flex;
  gap: 0.75rem;

  svg:first-child {
      fill: #6F7BE7;
  }

  svg:last-child {
      fill: #F75A68;
  }

  svg {
    width: 1.15rem;
    height: 1.15rem;
    cursor: pointer;
  }
`
