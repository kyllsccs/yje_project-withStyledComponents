import Image from "next/image";
import Link from "next/link";
import {
    MenuCardContainer,
    StyledReadMoreButton,
} from "../components/styles/MenuCard.styled";
import Photo_1 from "../public/image/posts/notyetuse/4238588.png";

function MenuCard(props) {
    const vwStyle = props.vw;
    // 用props控制CSS 整體寬度
    return (
        <MenuCardContainer
            style={{
                width: { vwStyle },
            }}
        >
            <div>
                {props.PhotoShow === "on" ? (
                    <Image src={props.Photo} alt={props.alt} />
                ) : (
                    <span />
                )}
            </div>
            {/* 控制圖片是否顯示, on顯示 off關閉 */}
            <a>{props.title}</a>
            <p>{props.contents}</p>
            <div>
                {props.ButtonShow === "on" ? (
                    <Link href={props.linkto} passHref>
                        <StyledReadMoreButton>
                            {props.buttonTXT}
                        </StyledReadMoreButton>
                    </Link>
                ) : (
                    <span />
                )}
            </div>
            {/* 控制按鍵是否顯示, on顯示 off關閉 */}
        </MenuCardContainer>
    );
}

// 設定帶入Deafult值, 避免沒有輸入對應paramater導致錯誤 default.defaultProps
// 設定預設值, 顯示的方式排列, 必須在每個page module 自己做調整
MenuCard.defaultProps = {
    vw: "20vw",
    PhotoShow: "on",
    title: "Enter Topic",
    contents: "Enter contents",
    ButtonShow: "on",
    linkto: "/",
    buttonTXT: "button content",
    Photo: Photo_1,
    alt: "YJE",
};

export default MenuCard;
