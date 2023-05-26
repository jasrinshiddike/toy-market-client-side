import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import LatestNews from "../LatestNews/LatestNews";
import PhotoGalary from "../PhotoGalary/PhotoGalary";
import ShopCategory from "../ShopCategory/ShopCategory";
import TrendingToys from "../TrendingToys/TrendingToys";


const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner />
            <PhotoGalary />
            <ShopCategory />
            <TrendingToys />
            <LatestNews />
        </div>
    );
};

export default Home;