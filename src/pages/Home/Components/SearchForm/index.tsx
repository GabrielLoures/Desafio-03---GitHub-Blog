import { SearchFormContainer, SearchFormHeader } from "./styles";

export function SearchForm({ totalIssues, setSearch }: any) {
  return (
    <SearchFormContainer>
      <SearchFormHeader>
        <h2>Publicações</h2>
        <span>{totalIssues} publicações</span>
      </SearchFormHeader>
       
       <input 
        type="text" 
        placeholder="Buscar conteúdo"
        onChange={(e) => setSearch(e.target.value)}
      />
    </SearchFormContainer>
  )
}