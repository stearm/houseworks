import * as React from 'react';
import Slider from 'react-slick';

export default ({children}: { children: React.ReactNode | Array<React.ReactNode> }) => {
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