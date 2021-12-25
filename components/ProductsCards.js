import { CardsContainer } from "./styles/ProductsCards.styled";
import Link from "next/link";

export default function PartnersCards({ main_post, detail_posts }) {
    return (
        <CardsContainer>
            <img src={main_post.frontmatter.cover_image} alt="" />
            <h3>{main_post.frontmatter.title}</h3>
            <p>{main_post.frontmatter.excerpt}</p>
            {detail_posts.map((detail_post, index) => (
                <Link href={`/post/${detail_post.slug}`}>
                    <dt key={index}>{detail_post.frontmatter.title}</dt>
                </Link>
            ))}
        </CardsContainer>
    );
}
