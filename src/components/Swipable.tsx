import * as React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

interface Props {
  children: React.ReactNode | Array<React.ReactNode>;
}

const Wrapper = styled.div`
  height: 100%;
  margin-top: 30px;
  margin-left: 5px;

  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;

const Swipable: React.SFC<Props> = ({children}) => {
  return (
    <Wrapper>
      {
        window.innerWidth <= 768
          ? (
            <Slider
              responsive={[{breakpoint: 768, settings: {slidesToShow: 1}}]}
              initialSlide={0}
              arrows={false}
              infinite={false}
            >
              {children}
            </Slider>
          )
          : children
      }
    </Wrapper>
  );
};

export default Swipable;