import { SolutionCardsContainer } from "./styles/SolutionCards.style";

export default function SolutionCards({ post }) {
    return (
        <SolutionCardsContainer>
            <img src={post.frontmatter.cover_image} alt="" />
            <h3>{post.frontmatter.title}</h3>
            <p>{post.frontmatter.excerpt}</p>
            <button>More Info.</button>
        </SolutionCardsContainer>
    );
}
