import { CardsContainer } from "./styles/ProductsCards.styled";
import Link from "next/link";

export default function PartnersCards({ main_post, detail_posts }) {
    return (
        <CardsContainer>
            <img src={main_post.frontmatter.cover_image} alt="" />
            <h3>{main_post.frontmatter.title}</h3>
            <p>{main_post.frontmatter.excerpt}</p>
            {detail_posts.map((detail_post, index) => (
                <dt key={index}>
                    <Link
                        href={`/products/product/${detail_post.product_folder}/${detail_post.main_foldername}/${detail_post.midd_foldername}/${detail_post.slug}`}
                        // href={`/posts/${detail_post.slug}`}
                    >
                        {/* {detail_post.frontmatter.title} */}
                        {detail_post.slug}
                    </Link>
                </dt>
            ))}
        </CardsContainer>
    );
}
