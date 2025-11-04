import { HeaderContainer, HeaderContent, FloatingCard } from "./styles";
import BlogLogo from "../../assets/BlogLogo.svg";
import { PostHeader } from "../PostHeader";

export function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <img src={BlogLogo} alt="" />
          <h1>GITHUB BLOG</h1>
        </HeaderContent>

        <FloatingCard>
          <PostHeader />
        </FloatingCard>
      </HeaderContainer>
    </>
  );
}
