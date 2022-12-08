import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import tool1 from "../../../assets/img/tools/html.svg";
import tool2 from "../../../assets/img/tools/css.svg";
import tool3 from "../../../assets/img/tools/bootstrap.svg";
import tool4 from "../../../assets/img/tools/sass.svg";
import tool5 from "../../../assets/img/tools/javascript.svg";
import tool6 from "../../../assets/img/tools/react.svg";
import tool7 from "../../../assets/img/tools/nodejs.svg";
import tool8 from "../../../assets/img/tools/git.svg";

const Skills = ({ skills }) => {
  const responsive = {
      superLargeDesktop: {
          breakpoint: { max:4000, min: 3000 },
          items: 5
      },
      desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
      },
      tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
      },
      mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
      }
  };

  return (
    <div className='about-skills'>
      <div className='row'>
        <div className='col-12'>
          <div className='section-heading'>
            <p>{skills.sectionHeading.paragraph}</p>
            <h2>{skills.sectionHeading.subtitle}</h2>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <Carousel 
            className="skill-slider" 
            responsive={responsive} 
            infinite={true} 
            arrows={false} 
            autoPlay={true} 
            autoPlaySpeed={2500} 
          >
            <Image src={tool1} />
            <Image src={tool2} />
            <Image src={tool3} />
            <Image src={tool4} />
            <Image src={tool5} />
            <Image src={tool6} />
            <Image src={tool7} />
            <Image src={tool8} />
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Skills