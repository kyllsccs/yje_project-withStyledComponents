import { IndexCardsContainer } from "./styles/IndexCardsContainer.styled";
import Link from "next/dist/client/link";

export default function IndexCards({ post }) {
    return (
        <IndexCardsContainer>
            <img src={post.frontmatter.cover_image} alt="" />
            <a>{post.frontmatter.title}</a>
            <p>{post.frontmatter.excerpt}</p>
            <Link href="/products">
                <button>Get More</button>
            </Link>
            <br></br>
        </IndexCardsContainer>
    );
}
