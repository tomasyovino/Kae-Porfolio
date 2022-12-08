import Content from "../Sections/About/Content";
import Services from "../Sections/About/Services";
import Skills from "../Sections/About/Skills";
import SectionHeading from "../SectionHeading";

const AboutScreen = ({ about }) => {
    return (
        <section id='about' className="p-4">
            <SectionHeading sectionHeading={about.sectionHeading} />
            <Content content={about.content} />
            <Services services={about.services} />
            <Skills skills={about.skills} />
        </section>
    )
}

export default AboutScreen