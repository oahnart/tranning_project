import React from "react";
import { ServiceCard } from "components";
import WebImg from "assets/images/Header/web.png";
import DesktopImg from "assets/images/Header/desktop.png";
import MobileImg from "assets/images/Header/mobile.png";
import LinkIcon from "assets/icons/link.svg";
import ElipImg from "assets/images/Compare/elip.png";
import DotsImg from "assets/images/Compare/dots-service.png";

import * as S from "./style";

interface Props {}

function Services({}: Props): React.ReactElement {
    const data = [
        {
            image: WebImg,
            title: "Web",
            detail: "Access the most recent version of the Klay Safe directly in your browser.",
        },
        {
            image: DesktopImg,
            title: "Desktop",
            detail: "Download the Klay Safe as a static desktop application for Windows, MacOS or Linux.",
        },
        {
            image: MobileImg,
            title: "Mobile Responsive",
            detail: "Conveniently manage your digital assets on-the-go.",
        },
    ];

    return (
        <S.ServicesWrapper>
            <img src={ElipImg} className="elip-img" />
            <img src={DotsImg} className="dots-img" />
            <S.Container>
                <S.LeftWrapper>
                    {data.map((item) => (
                        <ServiceCard
                            image={item.image}
                            title={item.title}
                            detail={item.detail}
                        />
                    ))}
                </S.LeftWrapper>
                <S.RightWrapper>
                    <S.BackgroundDiv />
                    <S.ServiceTitle>Download to experience</S.ServiceTitle>
                    <S.ContentText>
                        We’ve already built website, desktop and mobile
                        responsive for you.
                    </S.ContentText>
                    <S.Link href="https://klaysafe.com/welcome">
                        All releases and SHA256 checksums
                        <S.LinkIcon>
                            <img src={LinkIcon} />
                        </S.LinkIcon>
                    </S.Link>
                </S.RightWrapper>
            </S.Container>
        </S.ServicesWrapper>
    );
}

export default Services;
