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
    frontmatter: { title, date, cover_image },
    slug,
    content,
    main_foldername,
    midd_foldername,
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
    // const post_path =
    //     "Contents/products.posts/Aluminum_Frame_Monitor/products.details.posts";
    const post_path = "Contents/products.posts";
    const files_folder_array = fs.readdirSync(path.join(post_path)); // array
    // output array
    // console.log(files_folder_array);

    // 取用folder name, connect the products.details.posts path
    // const files_aim_folder = files_folder_array.map(
    //     (file_path) => `${file_path}/products.details.posts`
    // );
    // console.log(files_aim_folder);

    // get the first floder name
    const retFile_folder_name = files_folder_array.map(
        (filename_path) => filename_path
    );
    // console.log(retFile_folder_name);

    // get the files list in the lasted folders
    // const files_aim_files = files_aim_folder.map((file_path) => {
    //     const aim_folder_list = fs.readdirSync(path.join(post_path, file_path));
    //     // return `${post_path}/${files_aim_folder}/${aim_folder_list}`;
    //     return aim_folder_list;
    // });
    // console.log(files_aim_files);

    // const files = [];
    // for (let i = 0; i < files_aim_folder.length; i++) {
    //     for (let j = 0; j < files_aim_files[i].length; j++) {
    //         const aim_full_path = `${files_aim_folder[i]}/${files_aim_files[i][j]}`;
    //         files.push(aim_full_path);
    //     }
    // }

    // make an allpath object
    const allpath = [];
    retFile_folder_name.forEach((perFilename) => {
        const read_dirr = path.join(
            post_path,
            perFilename,
            "products.details.posts"
        );
        const aim_final_filename = fs.readFileSync(path.join(read_dirr));
        aim_final_filename.map((ffilename) => {
            const pathh = {
                main_foldername: perFilename,
                midd_foldername: "products.details.posts",
                slug: ffilename.replace(".md", ""),
            };
            allpath.push(pathh);
        });
    });

    // console.log(files);

    // const paths = files.map((filename) => ({
    //     params: {
    //         slug: filename.replace(".md", ""),
    //     },
    // }));

    // console.log(paths);

    return {
        paths: allpath,
        fallback: false,
    };
}

// 把 slug 簡單化 不要加入路徑, 路徑在getStaticProps裡面再做一次
export async function getStaticProps({
    params: { main_foldername, midd_foldername, slug },
}) {
    // console.log(slug);
    // const post_path =
    //     "Contents/products.posts/Aluminum_Frame_Monitor/products.details.posts";
    const post_path = "Contents/products.posts";
    const markdownData = fs.readFileSync(
        path.join(post_path, main_foldername, midd_foldername, slug + ".md"),
        "utf-8"
    );

    // console.log(markdownData);

    const { data: frontmatter, content } = matter(markdownData);

    return {
        props: {
            main_foldername,
            midd_foldername,
            frontmatter,
            slug,
            content,
        },
    };
}
