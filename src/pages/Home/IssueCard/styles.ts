import styled from "styled-components"

export const IssueCardContainer = styled.a`

  display: flex;
  flex-direction: column;

  background: ${props => props.theme["blue-300"]};
  border-radius: 10px;
  border: 2px solid transparent;

  transition: all 350ms;

  :hover {
    border-color: ${props => props.theme["gray-500"]};
  }

  padding: 2rem;

`

export const IssueCardHeader = styled.header`

  display: flex;
  align-items: top;
  justify-content: space-between;

  margin-bottom: 1.25rem;

  >h2 {
    color: ${props => props.theme["gray-100"]};
    font-size: 1.25rem;
    font-weight: bold;
    max-width: 15rem;
  }

  >span {
    color: ${props => props.theme["gray-400"]};
    font-size: 0.875rem;
    font-weight: normal;
    justify-self: top;
  }

`

export const IssueDetails = styled.div`
  width: 22rem;
  height: 7rem;
  
  >p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;

    color: ${props => props.theme["gray-300"]};
    font-size: 1rem;
    line-height: 160%;
  }

`