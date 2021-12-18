import fs from "fs";
import matter from "gray-matter";
import path from "path";
import ProductsCards from "../components/ProductsCards";
import { ProductsContainer } from "../components/styles/Products.styled";

// 迭代出卡片
function products({ posts }) {
    return (
        <ProductsContainer>
            <h1>Products</h1>
            {posts.map((post, index) => (
                <ProductsCards key={index} post={post} />
            ))}
        </ProductsContainer>
    );
}

export async function getStaticProps() {
    const filesbox = fs.readdirSync(path.join("Contents/products.posts"));
    // console.log(files);
    // 添加判斷為.md檔案的
    const files = [];
    for (let i = 0; i < filesbox.length; i++) {
        if (filesbox[i].includes(".md")) {
            files.push(filesbox[i]);
        }
    }
    console.log(files);

    const posts = files.map((filename) => {
        const slug = filename.replace(".md", "");
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
