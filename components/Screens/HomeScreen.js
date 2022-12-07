import LanguageHandler from "../Sections/Home/LanguageHandler";
import Banner from "../Sections/Home/Banner";

const HomeScreen = ({ home }) => {
    return (
        <section id="home" className="d-flex justify-content-center align-items-center">
            <LanguageHandler languageButton={home.languageButton} />
            <Banner textAnimation={home.textAnimation} />
        </section>
    )
}

export default HomeScreen