import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination} from "swiper";

export default function App() {
  return (
    <>
        <div className="container py-4">
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
                navigation={false}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className="bg-slide-game1">
                    <div className="d-flex flex-column justify-content-end px-3 h-100 pb-5">
                        <h2>Diablo IV</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, in.</p>
                        <div className="d-flex">
                            <a href="#" className="comprar-ahora">COMPRAR AHORA</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-slide-game2">
                    <div className="d-flex flex-column justify-content-end px-3 h-100 pb-5">
                        <h2>League of Leyends</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, in.</p>
                        <div className="d-flex">
                            <a href="#" className="comprar-ahora">COMPRAR AHORA</a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </>
  );
}
