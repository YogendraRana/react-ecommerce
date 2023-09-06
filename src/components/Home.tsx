import Navbar from "./Navbar";

function Home() {
    return (
        <section>
            <Navbar />
            <h3>Welcome Home!</h3>
            <p>This is the home page. Welcome!</p>
            <ul>
            {
                ["Feature 1", "Feature 2", "Feature 3"].map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))
            }
            </ul>
            

        </section>
    )



}

export default Home;