import fs from "fs";
import matter from "gray-matter";
import path from "path";
import PartnersCards from "../components/PartnersCards";
import { ProductsContainer } from "../components/styles/Products.styled";

function products({ posts }) {
    return (
        <ProductsContainer>
            <h1>Products</h1>
            {posts.map((post, index) => (
                <PartnersCards key={index} post={post} />
            ))}
        </ProductsContainer>
    );
}

export async function getStaticProps() {
    const files = fs.readdirSync(path.join("Contents/products.posts"));

    const posts = files.map((filename) => {
        const slug = filename.replace(",md", "");
        const markDownContents = fs.readFileSync(
            path.join("Contents/products.posts", filename),
            "utf-8"
        );

        const { data: frontmatter } = matter(markDownContents);

        return {
            slug,
            frontmatter,
        };
    });

    return {
        props: {
            posts,
        },
    };
}

export default products;
