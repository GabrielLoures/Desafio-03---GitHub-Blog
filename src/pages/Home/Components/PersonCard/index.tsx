import { PersonCardContainer, PersonalBaseInfos, PersonalInfos, PersonalInfosFooter, PersonalInfosHeader } from "./styles";

import { ArrowSquareOut, GithubLogo, Buildings, ShareNetwork } from "phosphor-react";

import { api } from "../../../../lib/axios";
import { useEffect, useState } from "react";

interface PersonalGithubInfos {
  name: string
  html_url: string
  bio: string
  login: string
  location: string
  public_repos: number
  avatar_url: string
}

export function PersonCard() {

  const [user, setUser] = useState<PersonalGithubInfos>()

  async function getPersonalGithubInfos() {

    const res = await api.get('/users/gabrielloures')

    setUser(res.data)
  }

  useEffect(() => {
    getPersonalGithubInfos()
  }, [])

  return (
    <PersonCardContainer>
        <img src={user?.avatar_url} alt="Imagem do usuário" />

        <PersonalInfos>
          <PersonalInfosHeader>
            <h1>{user?.name}</h1>
            <a href={user?.html_url} target="blank">
              <span>Github</span>
              <ArrowSquareOut size={16} weight="bold"/>
            </a>
          </PersonalInfosHeader>    

          <p>{user?.bio}</p>

          <PersonalInfosFooter>
            <PersonalBaseInfos>
              <GithubLogo size={18} color="#3A536B"/>
              <span>{user?.name}</span>
            </PersonalBaseInfos>
            <PersonalBaseInfos>
              <Buildings size={18} color="#3A536B"/>
              <span>{user?.location}</span>
            </PersonalBaseInfos>
            <PersonalBaseInfos>
              <ShareNetwork size={18} color="#3A536B"/>
              <span>{user?.public_repos} repositórios</span>
            </PersonalBaseInfos>
          </PersonalInfosFooter>
        </PersonalInfos>
    </PersonCardContainer>
  )
}