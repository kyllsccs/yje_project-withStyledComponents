import Image from "next/image";
import Link from "next/link";
import {
    MenuCardContainer,
    StyledReadMoreButton,
} from "../components/styles/MenuCard.styled";
import Photo from "../image/4537032.jpg";

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
                {props.PhotoShow === "on" ? <Image src={Photo} /> : <span />}
            </div>
            {/* 控制圖片是否顯示, on顯示 off關閉 */}
            <a>{props.title}</a>
            <p>{props.contents}</p>
            <div>
                {props.ButtonShow === "on" ? (
                    <Link href={props.linkto}>
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

export default MenuCard;
