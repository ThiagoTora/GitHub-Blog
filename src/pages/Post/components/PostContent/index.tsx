import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../../../../context/BlogContext";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'; 
import { ContentContainer, Descricao } from "./styles"; 
import { GITHUB_USERNAME } from "../../../../Config/Constant";

export function PostContent() {
    const { id } = useParams();
    const { posts, loading: loadingPosts } = useContext(BlogContext);
    const [markdownContent, setMarkdownContent] = useState<string>('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const post = posts.find((p) => p.id === Number(id));
    const username = GITHUB_USERNAME; 
    const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN; 

    useEffect(() => {
        async function fetchReadme() {
            setLoading(true);

            if (loadingPosts) return;

            if (!post) {
                setError("Post (Repositório) não encontrado.");
                setLoading(false);
                return;
            }
            
            if (!GITHUB_TOKEN) {
                setError("Erro de Configuração: GITHUB_TOKEN não carregado. Verifique o arquivo .env e reinicie o servidor.");
                setLoading(false);
                return;
            }

            const url = `https://api.github.com/repos/${username}/${post.name}/readme`;

            try {
                const response = await fetch(url, {
                    headers: {
                        'Accept': 'application/vnd.github.v3.raw', 
                        'Authorization': `token ${GITHUB_TOKEN}`,
                    },
                });

                if (response.status === 404) {
                    setMarkdownContent('Nenhum arquivo README.md encontrado neste repositório.');
                    setLoading(false);
                    return;
                }

                if (!response.ok) {
                    throw new Error(`Erro: ${response.status}`);
                }

                const markdownText = await response.text();
                setMarkdownContent(markdownText);
                
            } catch (err) {
                console.error("Erro ao buscar README:", err);
                setError(`Erro ao carregar o conteúdo do post: ${err instanceof Error ? err.message : 'Verifique o console para detalhes.'}`);
            } finally {
                setLoading(false);
            }
        }

        if (id) {
            fetchReadme();
        }
    }, [id, post, loadingPosts, GITHUB_TOKEN, username]); 

    if (loading) return <ContentContainer><p>Carregando conteúdo...</p></ContentContainer>;
    if (error) return <ContentContainer><p style={{ color: 'red' }}>{error}</p></ContentContainer>;
    if (!post) return <ContentContainer><p>Post não encontrado para exibição.</p></ContentContainer>;

    return (
        <ContentContainer>
            <Descricao>
                 {post.description}
                 <hr></hr>
            </Descricao>
            
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {markdownContent}
            </ReactMarkdown>
        </ContentContainer>
    );
}