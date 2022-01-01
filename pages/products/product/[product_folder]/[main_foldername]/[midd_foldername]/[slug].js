import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import {
    ProductListPageStyled,
    MarkdownContainer,
} from "../../../../../../components/styles/MarkdownApply.styled";

export default function ProductListPage({
    // product_folder,
    // main_foldername,
    // midd_foldername,
    frontmatter: { title, date, cover_image },
    slug,
    content,
}) {
    // console.log(slug);
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

    const post_path = "Contents/products.posts";
    const files_folder_array = fs.readdirSync(path.join(post_path)); // array
    const retFile_folder_name = files_folder_array.map(
        (filename_path) => filename_path
    );

    // make an allpath object
    const allpaths = [];
    retFile_folder_name.forEach((perFilename) => {
        const read_dirr = path.join(
            "Contents",
            "products.posts",
            perFilename,
            "products.details.posts"
        );
        const aim_final_filename = fs.readdirSync(path.join(read_dirr));
        aim_final_filename.forEach((filename) => {
            const path = {
                params: {
                    main_enter_path: "Contents",
                    product_folder: "products.posts",
                    main_foldername: perFilename,
                    midd_foldername: "products.details.posts",
                    slug: filename.replace(".md", ""),
                },
            };
            allpaths.push(path);
        });
    });

    // console.log(allpaths);

    return {
        paths: allpaths,
        fallback: false,
    };
}

// 把 slug 簡單化 不要加入路徑, 路徑在getStaticProps裡面再做一次
export async function getStaticProps({
    params: {
        // main_enter_path,
        product_folder,
        main_foldername,
        midd_foldername,
        slug,
    },
}) {
    const markdownData = fs.readFileSync(
        path.join(
            "Contents",
            product_folder,
            main_foldername,
            midd_foldername,
            slug + ".md"
        ),
        "utf-8"
    );

    const { data: frontmatter, content } = matter(markdownData);

    return {
        props: {
            // product_folder,
            // main_foldername,
            // midd_foldername,
            frontmatter,
            slug,
            content,
        },
    };
}
