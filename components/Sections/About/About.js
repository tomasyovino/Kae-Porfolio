import Services from "./Services";
import Skills from "./Skills";
import { Twitter, AlternateEmail, LinkedIn, GitHub, Instagram } from '@mui/icons-material';

const About = () => {
  return (
    <section id='about' className="p-4">
      <div className='about-info single-section'>
        <div className='row align-items-center'>
          {/* <!-- Picture part--> */}
          <div className='col-12 col-lg-5 info-img'>
            <span>Imagen</span>
          </div>
          {/* <!-- Content part--> */}
          <div className='col-12 col-lg-7 info-content'>
            <h2>Who am i?</h2>
            <h6>I'm Tomás Yovino, a visual UX/UI Designer and Web Developer</h6>
            <p className='description'>I am a freelancer based in the United Kingdom and i have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.</p>
            <div className="content-info">
              <div className='row'>
                <div className='col-12 col-md-6 single-info'>
                  <span>Nombre:</span>
                  <p>Tomás Yovino</p>
                </div>
                <div className='col-12 col-md-6 single-info'>
                  <span>Email:</span>
                  <a href='mailto:random@example.com'>
                    <p>example@gmail.com</p>
                  </a>
                </div>
              </div>
              <div className='row'>
                <div className='col-12 col-md-6 single-info'>
                  <span>Edad:</span>
                  <p>24</p>
                </div>
                <div className='col-12 col-md-6 single-info'>
                  <span>Dirección:</span>
                  <p>Buenos Aires, Arg</p>
                </div>
              </div>
            </div>
            <div className='d-block d-sm-flex align-items-center'>
              <a href='#' className='btn content-download'>Descargar CV</a>
              <ul className='list-unstyled list-inline content-follow'>
                <li className='list-inline-item'>
                  <a href='#'><Twitter /></a>
                </li>
                <li className='list-inline-item'>
                  <a href='#'><AlternateEmail /></a>
                </li>
                <li className='list-inline-item'>
                  <a href='#'><LinkedIn /></a>
                </li>
                <li className='list-inline-item'>
                  <a href='#'><GitHub /></a>
                </li>
                <li className='list-inline-item'>
                  <a href='#'><Instagram /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <Skills />
    </section>
  )
}

export default About