import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
function Galery() {
  return (
    <>
      <section id="galery" className="container pt-24">
        <h5 className="text-base flex justify-center">Get To Know</h5>
        <h2 className="flex justify-center mb-8">Galery</h2>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/assets/im/head.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/im/head.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/im/head.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/im/head.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/im/head.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default Galery;
