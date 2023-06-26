import { PersonCard } from "./Components/PersonCard";
import { SearchForm } from "./Components/SearchForm";
import { IssueCard } from "./IssueCard";

import { CardsContainer } from "./styles";

export function Home() {
  return (
    <div>
      <PersonCard />
      <SearchForm />
      <CardsContainer>
        <IssueCard />
        <IssueCard />
        <IssueCard />
      </CardsContainer>
    </div>
  )
}