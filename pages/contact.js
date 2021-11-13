import ImageView from "../components/ImageView";
import cover_image from "../public/image/posts/contact_cover.jpg";

function contact() {
    return (
        <div>
            <h2>Contact Information</h2>
            <ImageView Photo={cover_image} />
        </div>
    );
}

export default contact;
