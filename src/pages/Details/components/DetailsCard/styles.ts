import styled from "styled-components"

export const DetailsCardContainer = styled.section`

  max-width: 54rem;
  margin: 0 auto;

  display: flex;
  gap: 2rem;

  background: ${props => props.theme["blue-400"]};
  padding: 2.5rem 2rem;

  margin-top: -5rem;

  border-radius: 10px;

`

export const DetailsInfos = styled.div`

  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  >p {
    color: ${props => props.theme["gray-300"]};
    font-size: 16px;
    line-height: 160%
  }

`

export const DetailsInfosHeader = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;

  >h1 {
    color: ${props => props.theme["gray-100"]};
    line-height: 130%;
  }

  >a {
    display: flex;
    gap: 0.5rem;

    color: ${props => props.theme["blue-100"]};

    border-bottom: 1px solid transparent;

    transition: all 350ms ease-in-out;

    :nth-child(2):hover {
      border-bottom: 1px solid ${props => props.theme["blue-100"]};
    }
    
    >span {
      text-transform: uppercase;
      font-size: 12px;
      font-weight: bold;
      line-height: 160%;
    }
  }

`

export const DetailsInfosTitle = styled.div`

  color: ${props => props.theme["gray-100"]};

  margin-top: 1rem;

`

export const DetailsInfosFooter = styled.footer`

  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1.5rem;

`

export const DetailsBaseInfos = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  color: ${props => props.theme["gray-400"]}

`