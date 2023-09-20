// import components
import Navbar from "./Navbar";
import Slider from "../utils/Slider";
import Store from "../products/Store";
import Footer from "./Footer";
import Banner from "./Banner"
import Divider from "../utils/Divider";
import Recommendation from "./Recommendation";

// import data
import data from "../../data/data";

function Home() {
    return (
        <section className="overflow-hidden relative">
            <Navbar />
            {/* <Divider /> */}
            
            <Banner />
            <Divider />

            <Slider title="New Arrivals." message="Good things are waiting for you." items={data}  />
            <Divider />

            <Recommendation />
            <Divider />

            <Store />
            <Divider />
            
            <Footer />
        </section>
    )
}

export default Home;