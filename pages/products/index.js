import fs from "fs";
import matter from "gray-matter";
import path from "path";
import ProductsCards from "../../components/ProductsCards";
import { ProductsContainer } from "../../components/styles/Products.styled";

// 迭代出卡片
function products({ finial_data }) {
    return (
        <ProductsContainer>
            <h1>Products</h1>
            {finial_data.map((post, index) => (
                <ProductsCards
                    key={index}
                    main_post={post[0][0]}
                    detail_posts={post[1]}
                />
            ))}
        </ProductsContainer>
    );
}

export async function getStaticProps() {
    // 定義path 20211218 入口
    const main_folder_path = "Contents/products.posts";

    // 1 先取得資料夾內的所有資料夾&&檔案名稱
    function path_array(enter_path) {
        const path_box = fs.readdirSync(path.join(enter_path));
        const path_bank = [];
        for (let i = 0; i < path_box.length; i++) {
            let per_path = fs.readdirSync(path.join(enter_path, path_box[i]));
            per_path.unshift(path_box[i]);
            // 做處理, 去除內含.md的, 返回資料夾 only
            // console.log(per_path);
            // let per_path_array = [];
            // for (let j = 0; j < per_path.length; j++) {
            //     if (per_path[j].includes(".md") == false) {
            //         per_path_array.push(per_path[j]);
            //     }
            // }

            // console.log(path_box[i]);
            // path_bank.push(per_path_array);
            path_bank.push(per_path);
        }
        // console.log(path_box);
        // console.log(path_bank);
        // return 各個資料夾裡面的數據
        return path_bank;
    }

    // 2 取出明細&&details
    function exc_props(path_1) {
        const main_path = `Contents/products.posts/${path_1}`;
        const main_filesbox = fs.readdirSync(path.join(main_path));
        // const main_filesbox = path_array(path_1);
        // console.log(main_filesbox);

        // 添加判斷為.md檔案的
        const files = [];
        for (let i = 0; i < main_filesbox.length; i++) {
            if (main_filesbox[i].includes(".md")) {
                files.push(main_filesbox[i]);
            }
        }
        // console.log(files);

        // 加入路徑判斷為 main_foldername or midd_foldername
        if (path_1.includes("/")) {
            const posts = files.map((filename) => {
                const slug = filename.replace(".md", "");
                const markDownContents = fs.readFileSync(
                    path.join(main_path, filename),
                    "utf-8"
                );

                const { data: frontmatter } = matter(markDownContents);

                return {
                    main_foldername: path_1.split("/")[0],
                    midd_foldername: path_1.split("/")[1],
                    slug,
                    frontmatter,
                };
            });
            return posts;
        } else {
            const posts = files.map((filename) => {
                const slug = filename.replace(".md", "");
                const markDownContents = fs.readFileSync(
                    path.join(main_path, filename),
                    "utf-8"
                );

                const { data: frontmatter } = matter(markDownContents);

                return {
                    main_foldername: path_1,
                    slug,
                    frontmatter,
                };
            });
            return posts;
        }
    }

    // return posts;

    const path_banks = path_array(main_folder_path);
    // console.log(path_banks);

    // 3. 做出return object
    function back_objects(object_s) {
        const result_banks = [];
        for (let i = 0; i < object_s.length; i++) {
            const first_path = exc_props(object_s[i][0]);
            const finial_detail_path = exc_props(
                `${object_s[i][0]}/${object_s[i].pop()}`
            );
            const result_k = [first_path, finial_detail_path];
            // console.log(first_path.length);
            // console.log(finial_detail_path);
            result_banks.push(result_k);
        }
        // console.log(result_banks);
        return result_banks;
    }

    // const pp = "Contents/index.posts";

    const finial_data = back_objects(path_banks);
    // console.log(finial_data);

    return {
        props: {
            finial_data,
        },
    };
}

export default products;
