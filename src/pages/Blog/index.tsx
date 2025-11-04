import { useContext } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "./components/SearchForm";
import { BlogContainer, CardsGrid } from "./styles";
import { BlogContext } from "../../context/BlogContext";
import { PostCard } from "./components/PostCard";

export function Blog() {
    const { posts } = useContext(BlogContext);

    return (
        <div>
            <Header />

            <BlogContainer>
                <SearchForm />

                <CardsGrid>
                    {posts.map((post) => (
                        <PostCard
                            key={post.id}
                            id={post.id}
                            title={post.name}
                            description={post.description || "Sem descrição"}
                            date={post.created_at}
                        />
                    ))}
                </CardsGrid>
            </BlogContainer>
        </div>
    );
}