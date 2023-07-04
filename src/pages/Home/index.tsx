import { useEffect, useState } from "react";
import { PersonCard } from "./Components/PersonCard";
import { SearchForm } from "./Components/SearchForm";
import { IssueCard } from "./IssueCard";

import { CardsContainer } from "./styles";
import { api } from "../../lib/axios";

export interface IssuesInfos {
  title: string
  created_at: string
  body: string
  number: number
  node_id: string
}

export function Home() {

  const [issues, setIssues] = useState<IssuesInfos[]>([])
  const [totalIssues, setTotalIssues] = useState(0)
  const [search, setSearch] = useState('')

  useEffect(() => {

    async function fetchIssues() {
      const res = await api.get(`/search/issues?q=${search}%20repo:gabrielloures/desafio-03-github-blog`)

      setIssues(res.data.items)
      setTotalIssues(res.data.total_count)
    }

    fetchIssues()

  }, [search])

  return (
    <div>
      <PersonCard />
      <SearchForm 
        totalIssues={totalIssues}
        setSearch={setSearch}  
      />
      <CardsContainer>
        {issues &&
          issues.map((issue) => (
            <IssueCard 
              key={issue.node_id} 
              issue={issue} 
            />        
        ))}
      </CardsContainer>
    </div>
  )
}