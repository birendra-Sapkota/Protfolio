import React from 'react';
import '../../Components/Protfolio/protfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import slide1 from '../../img/ecommerce.png';
import slide2 from '../../img/musicapp.png';
import slide3 from '../../img/sidebar.png';
import slide4 from '../../img/hoc.png';

import 'swiper/css';

const Protfolio = () => {
  return (
    <div className='protfolio'>
            {/* heaing */}
            <span>Recent Projects</span>
            <span>Protfolio</span>

            <Swiper
            spaceBetween={30}
            slidesPerView={3} 
            grabCursor= {true}
            className='protfolio-slider'
            >
                <SwiperSlide>
                    <img src={slide1} alt=''></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt=''></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt=''></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt=''></img>
                </SwiperSlide>

            </Swiper>
    </div>
  );
};

export default Protfolio;