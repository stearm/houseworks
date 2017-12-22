import * as React from 'react';
import Slider from 'react-slick';

interface Props {
  children: React.ReactNode | Array<React.ReactNode>;
}

const Swipable: React.SFC<Props> = ({children}) => {
  return (
    <div style={{height: '100%'}}>
      {
        window.innerWidth <= 768
          ? (
            <Slider
              responsive={[{breakpoint: 768, settings: {slidesToShow: 1}}]}
              initialSlide={1}
              arrows={false}
              infinite={false}
            >
              {children}
            </Slider>
          )
          : children
      }
    </div>
  );
};

export default Swipable;