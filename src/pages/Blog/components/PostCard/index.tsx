import { Link } from "react-router-dom";
import { CardContainer } from "./styles";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface PostCardProps {
  title: string;
  description: string;
  date: string;
  id: number; 
}

function formatRelativeDate(dateString: string): string {
  return formatDistanceToNow(new Date(dateString), {
    addSuffix: true,
    locale: ptBR,
  });
}

export function PostCard({ title, description, date, id }: PostCardProps) {
  const formattedDate = formatRelativeDate(date);

  return (
    <CardContainer>
      <Link to={`/InfoContent/${id}`}>
        <header>
          <h3>{title}</h3>
          <span>{formattedDate}</span>
        </header>
        <p>{description}</p>
      </Link>
    </CardContainer>
  );
}
