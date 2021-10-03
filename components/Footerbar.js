import Image from "next/image";
import Link from "next/link";
import {
    FooterContainer,
    StyledFootContact,
    StyledFootInfo,
    StyledFootQuickLink,
} from "../components/styles/Foorterbar.styled";
import { StyledLogo } from "./styles/Navibar.styled";
import Logo_pic from "../image/logo.jpg";

function Footerbar() {
    return (
        <FooterContainer>
            <StyledFootInfo>
                <StyledLogo>
                    <Link href="/">
                        <a>
                            Y.J.E <a> Display Tech</a>
                        </a>
                    </Link>
                </StyledLogo>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                </p>
            </StyledFootInfo>
            <StyledFootQuickLink>
                <span> Quick Link</span>
                <li>
                    <Link href="/">About</Link>
                </li>
                <li>
                    <Link href="/">Products</Link>
                </li>
                <li>
                    <Link href="/">Solutions</Link>
                </li>
                <li>
                    <Link href="/">Partners</Link>
                </li>
            </StyledFootQuickLink>
            <StyledFootContact>
                <span>Contact YJE</span>
                <li>TEL : 886-2-22263839 </li>
                <li>FAX : 886-2-22263836</li>
                <li>E-mail : kk@yje.com.tw</li>
                <li>
                    Address: No. 496-6, Bannan Rd., Zhonghe Dist., New Taipei
                    City 235602, Taiwan (R.O.C.)
                </li>
            </StyledFootContact>
        </FooterContainer>
    );
}

export default Footerbar;
