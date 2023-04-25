import styled from 'styled-components'

export const Container = styled.header`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.75rem;

  button {
    font-size: 1.1rem;
    width: auto;
  }
`

export const Code = styled.h1`
  font-size: 7.8rem;
  font-weight: 700;
  color: #00B37E;
  margin-bottom: 0.75rem;
`

export const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 500;
  color: #E1E1E6;
  margin-bottom: 0.75rem;
`

export const Description = styled.p`
  font-size: 1.1rem;
  color: #C4C4CC;
  margin-bottom: 3rem;
`
