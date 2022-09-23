import React from 'react';
import Slider from "react-slick";

import * as S from './style';
import ProfilePic1 from 'assets/images/Slider/ProfilePic1.png';

interface Props { }

function SliderPage({ }: Props): React.ReactElement {
  const contents = [
    {
      name: 'Matthew Paul 1',
      quote: '"The Klay Safe is the clear leader when it comes to a product that balances usability, security, and self-custody."',
      img: ProfilePic1
    },
    {
      name: 'Matthew Paul 2',
      quote: '"The Klay Safe is the clear leader when it comes to a product that balances usability, security, and self-custody."',
      img: ProfilePic1
    },
    {
      name: 'Matthew Paul 3',
      quote: '"The Klay Safe is the clear leader when it comes to a product that balances usability, security, and self-custody."',
      img: ProfilePic1
    },
    {
      name: 'Matthew Paul 4',
      quote: '"The Klay Safe is the clear leader when it comes to a product that balances usability, security, and self-custody."',
      img: ProfilePic1
    },
    {
      name: 'Matthew Paul 5',
      quote: '"The Klay Safe is the clear leader when it comes to a product that balances usability, security, and self-custody."',
      img: ProfilePic1
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <S.SliderContainer>
      <S.SliderWrapper>
        <Slider {...settings}>
          {contents.map((content: any, key: number) =>
            <div>
              <S.SliderContent key={content.index}>
                <S.PictureWrapper>
                  <S.ProfilePicture src={content.img} />
                </S.PictureWrapper>
                <S.Content>
                  <S.Name>
                    {content.name}
                  </S.Name>
                  <S.Quote>
                    {content.quote}
                  </S.Quote>
                </S.Content>
              </S.SliderContent>
            </div>
          )}
        </Slider>
      </S.SliderWrapper>

    </S.SliderContainer>
  );
}
export default SliderPage;