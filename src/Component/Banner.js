import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import banner from '../data/Banner.json';




export default () => {
    return (
        <Swiper
            modules={[EffectFade, Autoplay]} effect="fade"
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}

            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}

            style={{ width: "1320px", height: "500px" }}>
            {
                banner.map((el, idx) => {
                    return <SwiperSlide style={ }></SwiperSlide>
                })
            }



        </Swiper>
    );
};