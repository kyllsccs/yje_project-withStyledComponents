import PartnersCards from "../components/PartnersCards";
import { PartnersStyledContainer } from "../components/styles/Partners.styled";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

function partners({ posts }) {
    // console.log(posts);
    return (
        <PartnersStyledContainer>
            <h1>Partners</h1>
            {posts.map((post, index) => (
                <PartnersCards key={index} post={post} />
            ))}
        </PartnersStyledContainer>
    );
}

// Server side 的路徑, path = 直接指定要接哪個資料夾, fetch the data.
export async function getStaticProps() {
    // 指定讀取檔案資料夾, 取得資料夾內部資訊, type is Array.
    const files = fs.readdirSync(path.join("Contents/partners.posts"));

    // 使用map function來返回每一個markdown裡面的資訊
    const posts = files.map((filename) => {
        const slug = filename.replace(".md", "");

        // 讀取檔案, 用同步function, utf-8 指定編碼方式
        const markDownContents = fs.readFileSync(
            path.join("Contents/partners.posts", filename),
            "utf-8"
        );
        // console.log(markDownContents);

        // 重新解構, 把data 解構為 frontmatter
        const { data: frontmatter } = matter(markDownContents);

        return {
            slug,
            frontmatter,
        };
    });

    return {
        props: {
            posts, // 把map 出來的objects 物件, 賦予給props.
        },
    };
}

export default partners;
