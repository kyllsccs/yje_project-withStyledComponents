import { CardsContainer } from "./styles/ProductsCards.styled";

export default function PartnersCards({ post }) {
    return (
        <CardsContainer>
            <img src={post.frontmatter.cover_image} alt="" />
            <h3>{post.frontmatter.title}</h3>
            <p>{post.frontmatter.excerpt}</p>
            <button>More Info.</button>
        </CardsContainer>
    );
}
