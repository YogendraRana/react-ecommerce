// import components
import Navbar from "./Navbar";
import Slider from "../utils/Slider";
import Store from "../products/Store";

// import data
import data from "../../data/data";
import Divider from "../utils/Divider";
import Footer from "./Footer";

function Home() {
    return (
        <section>
            <Navbar />
            <Slider title="New Arrivals." message="Good things are waiting for you." items={data}  />
            <Divider />
            <Store />
            <Divider />
            <Footer />
        </section>
    )
}

export default Home;