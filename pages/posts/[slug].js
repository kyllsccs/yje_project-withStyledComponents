import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import {
    ProductListPageStyled,
    MarkdownContainer,
} from "../../components/styles/MarkdownApply.styled";

export default function ProductListPage({
    frontmatter: { title, date, cover_image },
    slug,
    content,
}) {
    console.log(slug);
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
    const files_folder_array = fs.readdirSync(path.join(post_path)); // array
    // output array
    // console.log(files_folder_array);

    const files_aim_folder = files_folder_array.map(
        (file_path) => `${file_path}/products.details.posts`
    );

    // console.log(files_aim_folder);

    const files_aim_files = files_aim_folder.map((file_path) => {
        const aim_folder_list = fs.readdirSync(path.join(post_path, file_path));
        // return `${post_path}/${files_aim_folder}/${aim_folder_list}`;
        return aim_folder_list;
    });

    // console.log(files_aim_files);

    const files = [];
    for (let i = 0; i < files_aim_folder.length; i++) {
        for (let j = 0; j < files_aim_files[i].length; j++) {
            const aim_full_path = `${files_aim_folder[i]}/${files_aim_files[i][j]}`;
            files.push(aim_full_path);
        }
    }

    // console.log(files);

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
    // const post_path =
    //     "Contents/products.posts/Aluminum_Frame_Monitor/products.details.posts";
    const post_path = "Contents/products.posts";
    const markdownData = fs.readFileSync(
        path.join(post_path, slug + ".md"),
        "utf-8"
    );

    // console.log(markdownData);

    const { data: frontmatter, content } = matter(markdownData);

    return {
        props: {
            frontmatter,
            slug,
            content,
        },
    };
}
