import {Route, Routes, Navigate } from 'react-router-dom'; 
import { Blog } from './pages/Blog';
import { InfoContent } from './pages/Post';

export function Router(){
    return(
        <Routes>
            <Route path='/' element={<Blog />} />
            <Route path='/InfoContent' element={<Navigate to="/" replace />} />
            <Route path='/InfoContent/:id' element={<InfoContent />} />
        </Routes>
    )
}