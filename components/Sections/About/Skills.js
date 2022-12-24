import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import htmlIcon from "../../../assets/img/tools/html.svg";
import cssIcon from "../../../assets/img/tools/css.svg";
import bootstrapIcon from "../../../assets/img/tools/bootstrap.svg";
import sassIcon from "../../../assets/img/tools/sass.svg";
import javascriptIcon from "../../../assets/img/tools/javascript.svg";
import reactIcon from "../../../assets/img/tools/react.svg";
import nodeJsIcon from "../../../assets/img/tools/nodejs.svg";
import gitIcon from "../../../assets/img/tools/git.svg";
import nestJsIcon from "../../../assets/img/tools/nestjs.webp";
import sqlIcon from "../../../assets/img/tools/sql.webp";
import mongoDbIcon from "../../../assets/img/tools/mongodb.webp";
import jsonIcon from "../../../assets/img/tools/json.webp";

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
            <Image src={htmlIcon} />
            <Image src={cssIcon} />
            <Image src={bootstrapIcon} />
            <Image src={sassIcon} />
            <Image src={javascriptIcon} />
            <Image src={reactIcon} />
            <Image src={nodeJsIcon} />
            <Image src={nestJsIcon} />
            <Image src={mongoDbIcon} />
            <Image src={sqlIcon} />
            <Image src={jsonIcon} />
            <Image src={gitIcon} />
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Skills