// import components
import Banner from "./Banner"
import Navbar from "./Navbar";
import Footer from "./Footer";
import Space from "../utils/Space";
import Slider from "../utils/Slider";
import Store from "../products/Store";
import Recommendation from "./Recommendation";

// import data
import data from "../../data/data";

function Home() {
    return (
        <section className="relative">
            <Navbar />

            <main>
                <Banner />
                <Space />

                <Slider title="Trending." message="Good things are waiting for you." items={data}  />
                <Space />

                <Recommendation />
                <Space />

                <Store />
                <Space />
            </main>
            
            <Footer />
        </section>
    )
}

export default Home;