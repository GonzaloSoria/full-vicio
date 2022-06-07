import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination} from "swiper";

const SlideHome = () => {
  return (
    <>
        <div className="container-fluid">
            <div className="container py-5 mt-60">
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
                            <img src="assets/diabloIV-logo.png" alt="Diablo IV"/>
                            <p>Diablo IV es un próximo juego de rol de acción de exploración de mazmorras desarrollado y publicado por Blizzard Entertainment, el cuarto título de la serie Diablo.</p>
                            <div className="d-flex">
                                <a href="https://diablo4.blizzard.com/en-us/" target="_blank" className="comprar-ahora">MÁS INFO</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-slide-game2">
                        <div className="d-flex flex-column justify-content-end px-3 h-100 pb-5">
                            <img src="assets/lol-logo.png" alt="League of Legends" />
                            <p>League of Legends, comúnmente conocido como LOL, es un videojuego de arena de batalla multijugador en línea de 2009 desarrollado y publicado por Riot Games.</p>
                            <div className="d-flex">
                                <a href="https://signup.leagueoflegends.com/es-mx/signup/index#/" target="_blank" className="comprar-ahora">JUEGA GRATIS</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-slide-game3">
                        <div className="d-flex flex-column justify-content-end px-3 h-100 pb-5">
                            <img src="assets/assasins-creed-valhalla-logo.png" alt="Assasin's Creed Valhalla" />
                            <p>Assassin's Creed Valhalla es un videojuego de rol de acción de 2020 desarrollado por Ubisoft Montreal y publicado por Ubisoft.</p>
                            <div className="d-flex">
                                <a href="https://www.ubisoft.com/en-gb/game/assassins-creed/valhalla" target="_blank" className="comprar-ahora">MÁS INFO</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-slide-game4">
                        <div className="d-flex flex-column justify-content-end px-3 h-100 pb-5">
                            <img src="assets/elden-ring-logo.png" alt="Elden Ring" />
                            <p>Elden Ring es un juego de rol de acción desarrollado por FromSoftware y publicado por Bandai Namco Entertainment.</p>
                            <div className="d-flex">
                                <a href="https://en.bandainamcoent.eu/elden-ring/elden-ring" target="_blank" className="comprar-ahora">MÁS INFO</a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>  
        </div>
    </>
  );
}

export default SlideHome;
