import { DetailsProps } from "../..";
import { DetailsCardContainer, DetailsBaseInfos, DetailsInfos, DetailsInfosFooter, DetailsInfosHeader, DetailsInfosTitle } from "./styles";

import { ArrowSquareOut, GithubLogo, CalendarBlank, ChatCircle, CaretLeft } from "phosphor-react";

interface DetailsCardProps {
  details: DetailsProps
}

export function DetailsCard({ details }: DetailsCardProps) {
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
            <h1>{details.title}</h1>  
          </DetailsInfosTitle>  

          <DetailsInfosFooter>
            <DetailsBaseInfos>
              <GithubLogo size={18} />
              <span>{details.userName}</span>
            </DetailsBaseInfos>
            <DetailsBaseInfos>
              <CalendarBlank size={18} />
              <span>{details.createdAt}</span>
            </DetailsBaseInfos>
            <DetailsBaseInfos>
              <ChatCircle size={18} />
              <span>{details.comments} comentários</span>
            </DetailsBaseInfos>
          </DetailsInfosFooter>
        </DetailsInfos>

    </DetailsCardContainer>
  )
}