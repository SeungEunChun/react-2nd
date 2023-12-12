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
            <SwiperSlide style={{ background: "url(/img/slideshow/slide1.jpg) no-repeat center 100%", backgroundSize: "cover" }}></SwiperSlide>
            <SwiperSlide style={{ background: "url(/img/slideshow/slide2.jpg) no-repeat center 100%", backgroundSize: "cover" }}></SwiperSlide>
            <SwiperSlide style={{ background: "url(/img/slideshow/slide3.jpg) no-repeat center 100%", backgroundSize: "cover" }}></SwiperSlide>
            <SwiperSlide style={{ background: "url(/img/slideshow/slide4.jpg) no-repeat center 100%", backgroundSize: "cover" }}></SwiperSlide>

        </Swiper>
    );
};