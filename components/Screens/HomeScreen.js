import LanguageHandler from "../Sections/Home/LanguageHandler";
import Banner from "../Sections/Home/Banner";

const HomeScreen = () => {
    return (
        <section id="home" className="d-flex justify-content-center align-items-center">
            <LanguageHandler />
            <Banner />
        </section>
    )
}

export default HomeScreen