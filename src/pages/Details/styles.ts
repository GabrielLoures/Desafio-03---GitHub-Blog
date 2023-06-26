import styled from "styled-components"

export const DetailsContainer = styled.div`

  display: flex;
  flex-direction: column;

`

export const DetailsContent = styled.section`

  max-width: 54rem;
  margin: 0 auto;
  display: flex;
  padding: 2.5rem 2rem;

  color: ${props => props.theme["gray-300"]};
  
`