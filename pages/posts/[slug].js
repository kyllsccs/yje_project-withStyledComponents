import fs from "fs";
import path from "path";

export default function PostPage() {
    return <div>Post</div>;
}

export async function getStaticPaths() {
    const filebox = fs.readdirSync(path.join("Contents/index.posts"));

    const pathlist = filebox.map((filename) => ({
        params: {
            slug: filename,
        },
    }));

    // console.log(pathlist);
}
