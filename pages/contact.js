import ImageView from "../components/ImageView";
import cover_image from "../public/image/posts/notyetuse/contact_cover.jpg";

function contact() {
    return (
        <div>
            {/* <h2>Contact Information</h2> */}
            <ImageView Photo={cover_image} />
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3615.8078399360943!2d121.4868802!3d25.0066447!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a82ead2bcb31%3A0x8cd057330b63bc9d!2sNo.%20496-6%2C%20Bannan%20Rd%2C%20Zhonghe%20District%2C%20New%20Taipei%20City%2C%20235!5e0!3m2!1sen!2stw!4v1638713455586!5m2!1sen!2stw"
                width="300"
                height="225"
                style={{ border: "0", flex: 1, justifyItems: "center" }}
                // allowfullscreen=""
                loading="lazy"
            ></iframe>
        </div>
    );
}

export default contact;
