import { DetailsContent } from "./styles";

import { DetailsCard } from "./components/DetailsCard";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export interface DetailsProps {
  title: string
  userName: string
  createdAt: string
  comments: number
  body: string
}

export function Details() {

  const [details, setDetails] = useState<DetailsProps>({} as DetailsProps)

  const { id } = useParams()

  useEffect(() => {

    async function fetchIssueDetails() {
      const res = await api.get(`/repos/gabrielloures/desafio-03-github-blog/issues/${id}`)
      
      const {
        title,
        user,
        created_at,
        comments,
        body
      } = res.data

      const newIssueDetails = {
        title,
        userName: user.login,
        createdAt: formatDistanceToNow(new Date(created_at), {
          locale: ptBR,
          addSuffix: true
        }),
        comments,
        body
      }

      setDetails(newIssueDetails)
    }

    fetchIssueDetails()

  }, [id])

  return (
    <div>
      <DetailsCard details={details}/>
      <DetailsContent>
        <p>{details.body}</p>
      </DetailsContent>
    </div>
  )
}