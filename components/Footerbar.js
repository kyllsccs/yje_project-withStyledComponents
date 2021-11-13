import Link from "next/link";
import {
    FooterContainer,
    StyledFootContact,
    StyledFootInfo,
    StyledFootQuickLink,
} from "../components/styles/Foorterbar.styled";
import { StyledLogo } from "./styles/Navibar.styled";

function Footerbar() {
    return (
        <FooterContainer>
            <StyledFootInfo>
                <StyledLogo>
                    <Link href="/">
                        <a>Y.J.E Display Tech</a>
                    </Link>
                </StyledLogo>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                </p>
            </StyledFootInfo>
            <StyledFootQuickLink>
                <span> Quick Link</span>
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/products">
                        <a>Products</a>
                    </Link>
                </li>
                <li>
                    <Link href="/solutions">
                        <a>Solutions</a>
                    </Link>
                </li>
                <li>
                    <Link href="/partners">
                        <a>Partners</a>
                    </Link>
                </li>
            </StyledFootQuickLink>
            <StyledFootContact>
                <a>Contact YJE</a>
                <li>TEL : 886-2-22263839 </li>
                <li>FAX : 886-2-22263836</li>
                <li>E-mail : kk@yje.com.tw</li>
                <li>
                    {/* Address */}
                    Address: No. 496-6, Bannan Rd., Zhonghe Dist., New Taipei
                    City 235602, Taiwan (R.O.C.)
                </li>
            </StyledFootContact>
        </FooterContainer>
    );
}

export default Footerbar;
