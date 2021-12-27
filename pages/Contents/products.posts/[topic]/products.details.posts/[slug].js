import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import {
    ProductListPageStyled,
    MarkdownContainer,
} from "../../../../../components/styles/MarkdownApply.styled";

export default function ProductListPage({
    topic,
    frontmatter: { title, date, cover_image },
    slug,
    content,
}) {
    return (
        <ProductListPageStyled>
            <Link href="/products">
                <button>Go Back</button>
            </Link>
            <div className="container">
                <h1>{title}</h1>
                <h4>On {date}</h4>
                <img src={cover_image} alt="" />
                <MarkdownContainer>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: marked.parse(content),
                        }}
                    ></div>
                </MarkdownContainer>
            </div>
        </ProductListPageStyled>
    );
}

export async function getStaticPaths() {
    // 取出資料夾裡面的.md 檔案名稱, 當成path
    // const post_path =
    //     "Contents/products.posts/Aluminum_Frame_Monitor/products.details.posts";
    const post_path = "Contents/products.posts";

    // 讀取到 內容資料夾裡面的產品資料夾
    const files_banks = fs.readdirSync(path.join(post_path)); // array
    // const files_bank = fs.readdirSync(path.join("Contents/products.posts")); // array

    // console.log(files_banks);
    const allpaths = [];

    files_banks.forEach((topic_folder_name) => {
        // concat 產品檔名 -->  推進到讀取各個產品資料夾
        const aim_folder_path = path.join(post_path, topic_folder_name);
        // 指定讀取裡面目的地的 產品明細資料夾
        const aim_folder_files = fs.readdirSync(
            path.join(aim_folder_path, "products.details.posts")
        );

        // console.log(aim_folder_files);

        aim_folder_files.forEach((aim_filename) => {
            const aim_details_path = {
                params: {
                    topic: topic_folder_name,
                    // fixed_path: "products.details.posts",
                    slug: aim_filename.replace(".md", ""),
                },
            };

            allpaths.push(aim_details_path);
        });
    });

    // console.log(allpaths);

    return {
        paths: allpaths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { topic, slug } }) {
    // console.log(slug);
    // const post_path =
    // "Contents/products.posts/Aluminum_Frame_Monitor/products.details.posts";
    const post_path = "Contents/products.posts";
    const fixed_path = "products.details.posts";
    // 不是資料夾的加上.md

    // console.log(topic);

    const markdownData = fs.readFileSync(
        path.join(post_path, topic, fixed_path, slug + ".md"),
        "utf-8"
    );

    // const markdownData = fs.readFileSync(
    //     path.join(post_path, slug + ".md"),
    //     "utf-8"
    // );

    console.log(markdownData);

    const { data: frontmatter, content } = matter(markdownData);

    return {
        props: {
            topic,
            frontmatter,
            slug,
            content,
        },
    };
}
