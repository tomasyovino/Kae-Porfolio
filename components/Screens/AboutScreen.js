import Content from "../Sections/About/Content";
import Services from "../Sections/About/Services";
import Skills from "../Sections/About/Skills";
import SectionHeading from "../SectionHeading";

const AboutScreen = () => {
    return (
        <section id='about' className="p-4">
            <SectionHeading paragraph={"Get to know me"} subtitle={"About Me"} />
            <Content />
            <Services />
            <Skills />
        </section>
    )
}

export default AboutScreen