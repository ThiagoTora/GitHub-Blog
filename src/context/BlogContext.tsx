import { createContext, useEffect, useState, useCallback, type ReactNode } from "react";
import { GITHUB_USERNAME } from "../Config/Constant"; 

interface Post {
    id: number;
    name: string;
    description: string;
    created_at: string;
    html_url: string; 
}

interface BlogContextData {
    posts: Post[];
    loading: boolean;
    totalCount: number; 
    fetchPosts: (query?: string) => Promise<void>;
}

interface BlogContextProps {
    children: ReactNode;
}

export const BlogContext = createContext<BlogContextData>({
    posts: [], 
    loading: true,
    totalCount: 0,
    fetchPosts: async () => {},
} as BlogContextData); 

export function BlogProvider({ children }: BlogContextProps) {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [totalCount, setTotalCount] = useState(0);

    const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN; 
    const username = GITHUB_USERNAME; 

    const fetchPosts = useCallback(async (query: string = "") => {
        setLoading(true);

        const searchPath = query 
            ? `search/repositories?q=${query}+user:${username}&per_page=100`
            : `users/${username}/repos?per_page=100`;

        const baseUrl = 'https://api.github.com/';

        try {
            const response = await fetch(`${baseUrl}${searchPath}`, {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`,
                },
            });
            
            if (!response.ok) {
                setLoading(false);
                return;
            }

            const data = await response.json();

            const fetchedPosts = query ? data.items : data;
            const count = query ? data.total_count : fetchedPosts.length;

            setPosts(fetchedPosts);
            setTotalCount(count);
            
        } catch (_error) {
            console.error("Erro na busca de posts:", _error);
            setPosts([]);
            setTotalCount(0);
        } finally {
            setLoading(false);
        }
    }, [GITHUB_TOKEN, username]); 

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]); 

    return (
        <BlogContext.Provider value={{ 
            posts, 
            loading, 
            totalCount, 
            fetchPosts }}>
            {children}
        </BlogContext.Provider>
    );
}