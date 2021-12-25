import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
// import styled from "styled-components";
import {
    ProductListPageStyled,
    MarkdownContainer,
} from "../../components/styles/MarkdownApply.styled";

export default function ProductListPage({
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
    const post_path =
        "Contents/products.posts/Aluminum_Frame_Monitor/products.details.posts";
    const files = fs.readdirSync(path.join(post_path)); // array
    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace(".md", ""),
        },
    }));

    // console.log(paths);

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {
    // console.log(slug);
    const post_path =
        "Contents/products.posts/Aluminum_Frame_Monitor/products.details.posts";
    const markdownData = fs.readFileSync(
        path.join(post_path, slug + ".md"),
        "utf-8"
    );

    const { data: frontmatter, content } = matter(markdownData);

    return {
        props: {
            frontmatter,
            slug,
            content,
        },
    };
}
