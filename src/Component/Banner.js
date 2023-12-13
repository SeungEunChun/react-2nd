import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';





export default (props) => {
    return (
        <Swiper
            modules={[EffectFade, Autoplay]} effect="fade"
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}

            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}

            style={{ width: "1320px" }}>
            {
                props.datasrc.map((el, idx) => {
                    return <SwiperSlide style={{ background: `url(/img/slideshow/${el.background}) no-repeat center`, height: "550px", backgroundSize: "100%" }} key={idx}>

                    </SwiperSlide>
                })
            }







        </Swiper>
    );
};