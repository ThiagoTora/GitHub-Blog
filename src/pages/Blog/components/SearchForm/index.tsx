import { useContext, useState, type FormEvent, useCallback } from 'react';
import { SearchFormContainer, SearchHeader } from './styles';
import { BlogContext } from '../../../../context/BlogContext';

export function SearchForm() {
    const [searchTerm, setSearchTerm] = useState('');
    const { totalCount, fetchPosts, loading } = useContext(BlogContext);

    const handleSearch = useCallback(async (event: FormEvent) => {
        event.preventDefault();
        await fetchPosts(searchTerm);
        
    }, [fetchPosts, searchTerm]); 

    return (
        <SearchFormContainer onSubmit={handleSearch}>
            <SearchHeader>
                <h3>Publicações</h3>
                <span>{totalCount} publicações</span>
            </SearchHeader>

            <input
                type="text"
                placeholder="Buscar conteúdo"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                disabled={loading} 
            />
        </SearchFormContainer>
    );
}