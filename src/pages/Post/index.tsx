
import { Header } from "../../components/Header";
import { PostContent } from "./components/PostContent";
import { PostContainer } from "./styles"; 

export function InfoContent (){
    return (
        <div>
            <Header />
            <PostContainer>  
                <PostContent />
            </PostContainer>
        </div>
    )
}