import { PersonCardContainer, PersonalBaseInfos, PersonalInfos, PersonalInfosFooter, PersonalInfosHeader } from "./styles";

import { ArrowSquareOut, GithubLogo, Buildings, Users } from "phosphor-react";

export function PersonCard() {
  return (
    <PersonCardContainer>
        <img src="https://avatars.githubusercontent.com/u/108671628?v=4" alt="Imagem do usuário" />

        <PersonalInfos>
          <PersonalInfosHeader>
            <h1>Gabriel Loures</h1>
            <a href="http://github.com/GabrielLoures" target="blank">
              <span>Github</span>
              <ArrowSquareOut size={16} weight="bold"/>
            </a>
          </PersonalInfosHeader>    

          <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

          <PersonalInfosFooter>
            <PersonalBaseInfos>
              <GithubLogo size={18} color="#3A536B"/>
              <span>GabrielLoures</span>
            </PersonalBaseInfos>
            <PersonalBaseInfos>
              <Buildings size={18} color="#3A536B"/>
              <span>Rocketseat</span>
            </PersonalBaseInfos>
            <PersonalBaseInfos>
              <Users size={18} color="#3A536B"/>
              <span>33 seguidores</span>
            </PersonalBaseInfos>
          </PersonalInfosFooter>
        </PersonalInfos>
    </PersonCardContainer>
  )
}