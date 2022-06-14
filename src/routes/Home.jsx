import BannerHome from "../components/BannerHome";
import Categories from "../components/Categories";
import Slide from "../components/SlideHome";
import PopularItemListContainer from "../components/PopularItemListContainer";

const Home = () => {
    return (
        <>
            <Slide />
            <PopularItemListContainer />
            <BannerHome />
            <Categories />
        </>
    )
}

export default Home;