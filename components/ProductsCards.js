import { CardsContainer } from "./styles/ProductsCards.styled";

export default function PartnersCards({ main_post, detail_posts }) {
    return (
        <CardsContainer>
            <img src={main_post.frontmatter.cover_image} alt="" />
            <h3>{main_post.frontmatter.title}</h3>
            <p>{main_post.frontmatter.excerpt}</p>
            {detail_posts.map((detail_post) => (
                <button>{detail_post.frontmatter.title}</button>
            ))}
        </CardsContainer>
    );
}
