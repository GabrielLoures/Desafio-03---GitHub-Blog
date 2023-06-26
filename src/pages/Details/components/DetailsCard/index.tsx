import { DetailsCardContainer, DetailsBaseInfos, DetailsInfos, DetailsInfosFooter, DetailsInfosHeader, DetailsInfosTitle } from "./styles";

import { ArrowSquareOut, GithubLogo, CalendarBlank, ChatCircle, CaretLeft } from "phosphor-react";

export function DetailsCard() {
  return (
    <DetailsCardContainer>
        
        <DetailsInfos>
          <DetailsInfosHeader>
            <a href="/">
              <CaretLeft size={16} weight="bold"/>
              <span>Voltar</span>
            </a>
            <a href="http://github.com/GabrielLoures" target="blank">
              <span>Ver no Github</span>
              <ArrowSquareOut size={16} weight="bold"/>
            </a>
          </DetailsInfosHeader>  

          <DetailsInfosTitle>
            <h1>JavaScript data types and data structures</h1>  
          </DetailsInfosTitle>  

          <DetailsInfosFooter>
            <DetailsBaseInfos>
              <GithubLogo size={18} />
              <span>GabrielLoures</span>
            </DetailsBaseInfos>
            <DetailsBaseInfos>
              <CalendarBlank size={18} />
              <span>Há 1 dia</span>
            </DetailsBaseInfos>
            <DetailsBaseInfos>
              <ChatCircle size={18} />
              <span>33 comentários</span>
            </DetailsBaseInfos>
          </DetailsInfosFooter>
        </DetailsInfos>

    </DetailsCardContainer>
  )
}