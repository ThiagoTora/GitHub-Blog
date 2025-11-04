import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faUsers,
  faCalendar,
  faComment,
  faAngleLeft,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useContext, useEffect, useState, useMemo } from "react";
import {
  Container,
  InfoBio,
  InfoContainer,
  InfoDados,
  InfoHeader,
  PostAssets,
  PostContainer,
  PostHeaderBack,
  PostTittle,
  LinkBack,
} from "./styles";
import { BlogContext } from "../../context/BlogContext";
import { useParams, useLocation } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { GITHUB_USERNAME } from "../../Config/Constant";

interface GithubUser {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  company: string;
  followers: number;
}

interface Issue {
  number: number;
  comments: number;
}

function formatRelativeDate(dateString: string): string {
  if (!dateString) return "Data não disponível";
  return formatDistanceToNow(new Date(dateString), {
    addSuffix: true,
    locale: ptBR,
  });
}

export function PostHeader() {
  const { posts } = useContext(BlogContext);
  const { id } = useParams();
  const location = useLocation();

  const isInfoContentPage = useMemo(
    () => location.pathname.includes("InfoContent"),
    [location.pathname]
  );

  const [user, setUser] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [issue, setIssue] = useState<Issue>();

  const username = GITHUB_USERNAME;
  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

  // Busca dados do usuário
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`,
          { headers: { Authorization: `token ${GITHUB_TOKEN}` } }
        );

        if (!response.ok) {
          console.error(`Erro: ${response.status}`);
          return;
        }

        const data: GithubUser = await response.json();
        setUser(data);
      } catch (err) {
        console.error("Erro ao buscar usuário:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [GITHUB_TOKEN, username]);

  // Busca Issue do post
  useEffect(() => {
    async function fetchPostIssue() {
      if (!isInfoContentPage || !id) return;

      const currentPost = posts.find((p) => p.id === Number(id));
      if (!currentPost) return;

      try {
        const response = await fetch(
          `https://api.github.com/repos/${username}/${currentPost.name}/issues?state=open&sort=created&direction=asc&per_page=1`,
          { headers: { Authorization: `token ${GITHUB_TOKEN}` } }
        );

        const data = await response.json();

        if (response.ok && data.length > 0) {
          setIssue({
            number: data[0].number,
            comments: data[0].comments,
          });
        } else {
          setIssue({ number: 0, comments: 0 });
        }
      } catch (err) {
        console.error("Erro ao buscar issue:", err);
        setIssue({ number: 0, comments: 0 });
      }
    }

    if (isInfoContentPage && posts.length > 0) {
      fetchPostIssue();
    }
  }, [isInfoContentPage, id, posts, GITHUB_TOKEN, username]);

  // ======================
  //  RENDER USER PROFILE
  // ======================
  if (!isInfoContentPage) {
    if (loading) return <Container>Carregando...</Container>;
    if (!user) return <Container>Usuário não encontrado.</Container>;

    return (
      <Container>
        <img src={user.avatar_url} alt={user.name} />

        <InfoContainer>
          <InfoHeader>
            <h2>{user.name}</h2>

            <a href={user.html_url} target="_blank" rel="noreferrer">
              GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </InfoHeader>

          <InfoBio>{user.bio}</InfoBio>

          <InfoDados>
            <span>
              <FontAwesomeIcon icon={faGithub} /> {user.login}
            </span>

            {user.company && (
              <span>
                <FontAwesomeIcon icon={faBuilding} /> {user.company}
              </span>
            )}

            <span>
              <FontAwesomeIcon icon={faUsers} /> {user.followers} Seguidores
            </span>
          </InfoDados>
        </InfoContainer>
      </Container>
    );
  }

  // ======================
  //  RENDER POST PAGE
  // ======================
  const post = posts.find((p) => p.id === Number(id));
  if (!post) return <Container>Post não encontrado.</Container>;

  return (

      <PostContainer>
        <PostHeaderBack>
          <LinkBack to="/">
            <h2>
              <FontAwesomeIcon icon={faAngleLeft} />
              VOLTAR
            </h2>
          </LinkBack>

          <a href={post.html_url} target="_blank" rel="noreferrer">
            VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </PostHeaderBack>

        <PostTittle>
          <h1>{post.name}</h1>
        </PostTittle>

        <PostAssets>
          <span>
            <FontAwesomeIcon icon={faGithub} /> {username}
          </span>

          <span>
            <FontAwesomeIcon icon={faCalendar} />{" "}
            {formatRelativeDate(post.created_at)}
          </span>

          <span>
            <FontAwesomeIcon icon={faComment} />{" "}
            {issue
              ? `${issue.comments} comentário${
                  issue.comments !== 1 ? "s" : ""
                }`
              : "Carregando..."}
          </span>
        </PostAssets>
      </PostContainer>
  );
}
