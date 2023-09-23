// import components
import Banner from "./Banner"
import Navbar from "./Navbar";
import Footer from "./Footer";
import Slider from "../utils/Slider";
import Store from "../products/Store";
import Divider from "../utils/Divider";
import Recommendation from "./Recommendation";

// import data
import data from "../../data/data";

function Home() {
    return (
        <section className="relative">
            <Navbar />

            <main>
                <Banner />
                <Divider />

                <Slider title="New Arrivals." message="Good things are waiting for you." items={data}  />
                <Divider />

                <Recommendation />
                <Divider />

                <Store />
                <Divider />
            </main>
            
            <Footer />

            {/* drawers */}
        </section>
    )
}

export default Home;