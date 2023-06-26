import styled from "styled-components"

export const SearchFormContainer = styled.form`

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  max-width: 54rem;
  margin: 0 auto;

  margin-top: 4.5rem;

  >input {
    background: ${props => props.theme["blue-600"]};
    border: 1px solid ${props => props.theme["blue-200"]};
    border-radius: 6px;

    color: ${props => props.theme["gray-100"]};

    padding: 0.75rem 1rem;

    :focus {
      border-color: ${props => props.theme["blue-100"]};
    }

    ::placeholder {
      color: ${props => props.theme["gray-500"]};
      font-size: 1rem;
      line-height: 160%;
    }
  }

`

export const SearchFormHeader = styled.header`

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  >h2 {
    color: ${props => props.theme["gray-200"]};
    font-size: 1.125rem;
    font-weight: bold;
  };

  >span {
    color: ${props => props.theme["gray-400"]};
    font-size: 0.875rem;
    font-weight: normal;
  }

`