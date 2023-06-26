import { SearchFormContainer, SearchFormHeader } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <SearchFormHeader>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </SearchFormHeader>
       
       <input type="text" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  )
}