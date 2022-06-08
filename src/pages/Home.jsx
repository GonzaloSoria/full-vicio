import BannerHome from "../components/BannerHome";
import Categories from "../components/Categories";
import PopularItems from "../components/PopularItems";
import Slide from "../components/SlideHome";

const Home = () => {
    return (
        <>
            <Slide />
            <PopularItems />
            <BannerHome />
            <Categories />
        </>
    )
}

export default Home;