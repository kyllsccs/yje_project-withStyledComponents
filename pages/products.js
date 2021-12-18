import fs from "fs";
import matter from "gray-matter";
import path from "path";
import ProductsCards from "../components/ProductsCards";
import { ProductsContainer } from "../components/styles/Products.styled";

// 迭代出卡片
function products({ main_posts, detail_posts }) {
    return (
        <ProductsContainer>
            <h1>Products</h1>
            {main_posts.map((post, index) => (
                <ProductsCards
                    key={index}
                    main_post={post}
                    detail_posts={detail_posts}
                />
            ))}
        </ProductsContainer>
    );
}

export async function getStaticProps() {
    // 定義path 20211218
    const main_folder_path = "Contents/products.posts";
    const details_folder_path =
        "Contents/products.posts/products.details.posts";

    // 1 先取得資料夾內的所有資料夾&&檔案名稱
    function path_array(enter_path) {
        const path_box = fs.readdirSync(path.join(enter_path));
        return path_box;
    }

    // 2 取出明細&&details
    function exc_props(path_1) {
        const main_filesbox = path_array(path_1);
        console.log(main_filesbox);

        // console.log(files);
        // 添加判斷為.md檔案的
        const files = [];
        for (let i = 0; i < main_filesbox.length; i++) {
            if (main_filesbox[i].includes(".md")) {
                files.push(main_filesbox[i]);
            }
        }
        // console.log(files);

        const posts = files.map((filename) => {
            const slug = filename.replace(".md", "");
            const markDownContents = fs.readFileSync(
                path.join(path_1, filename),
                "utf-8"
            );

            const { data: frontmatter } = matter(markDownContents);

            return {
                slug,
                frontmatter,
            };
        });
        return posts;
    }

    const main_posts = exc_props(main_folder_path);
    const detail_posts = exc_props(details_folder_path);

    return {
        props: {
            main_posts,
            detail_posts,
        },
    };
}

export default products;
