import { formatDistanceToNow } from "date-fns";
import { IssuesInfos } from "..";
import { IssueCardContainer, IssueCardHeader, IssueDetails } from "./styles";
import { ptBR } from "date-fns/locale";

interface IssueCardProps {
  issue: IssuesInfos
}

export function IssueCard({ issue }: IssueCardProps ) {

  const { created_at, body, title, number } = issue
  
  const formattedDate = formatDistanceToNow(new Date(created_at), {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <IssueCardContainer href={`/details/${number}`}>
      <IssueCardHeader>
        <h2>{title}</h2>
        <span>{formattedDate}</span>
      </IssueCardHeader>
      <IssueDetails>
        <p>
          {body}
        </p>
      </IssueDetails>
    </IssueCardContainer>
  )
}