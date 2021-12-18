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
    // 定義path 20211218
    const main_folder_path = "Contents/products.posts";
    const details_folder_path =
        "Contents/products.posts/products.details.posts";


    
    const main_filesbox = fs.readdirSync(path.join(main_folder_path));
    // console.log(files);
    // 添加判斷為.md檔案的
    const files = [];
    for (let i = 0; i < main_filesbox.length; i++) {
        if (main_filesbox[i].includes(".md")) {
            files.push(main_filesbox[i]);
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
