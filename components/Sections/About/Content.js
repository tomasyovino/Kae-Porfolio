import { Twitter, AlternateEmail, LinkedIn, GitHub, Instagram } from '@mui/icons-material';
import Image from "next/image";
import picture from "../../../assets/img/about_me.png";

const Content = ({ content }) => {
  return (
    <div className='about-info single-section'>
      <div className='row align-items-center'>
        {/* <!-- Picture part--> */}
        <div className='col-12 col-lg-5 info-img'>
          <Image src={picture} className="img-fluid img-thumbnail" priority />
        </div>
        {/* <!-- Content part--> */}
        <div className='col-12 col-lg-7 info-content'>
          <h2>{content.title}</h2>
          <h6>{content.subtitle}</h6>
          <p className='description'>{content.paragraph}</p>
          <div className="content-info">
            <div className='row'>
              <div className='col-12 col-md-6 single-info'>
                <span>{content.info.name}</span>
                <p>Tomás Yovino</p>
              </div>
              <div className='col-12 col-md-6 single-info'>
                <span>{content.info.email}</span>
                <a href='mailto:tomasyovino@gmail.com' target="_blank" rel="noopener noreferrer">
                  <p>tomasyovino@gmail.com</p>
                </a>
              </div>
            </div>
            <div className='row'>
              <div className='col-12 col-md-6 single-info'>
                <span>{content.info.age}</span>
                <p>24</p>
              </div>
              <div className='col-12 col-md-6 single-info'>
                <span>{content.info.address}</span>
                <p>Buenos Aires, Arg</p>
              </div>
            </div>
          </div>
          <div className='d-block d-sm-flex align-items-center'>
            <a 
              href={`/${content.info.CVRef}`}
              download={content.info.CVRef}
              className='btn content-download'
            >
              {content.info.buttonCV}
            </a>
            <ul className='list-unstyled list-inline content-follow'>
              <li className='list-inline-item'>
                <a href='https://twitter.com/TomasYovino' target="_blank" rel="noopener noreferrer"><Twitter /></a>
              </li>
              <li className='list-inline-item'>
                <a href='mailto:tomasyovino@gmail.com' target="_blank" rel="noopener noreferrer"><AlternateEmail /></a>
              </li>
              <li className='list-inline-item'>
                <a href='https://www.linkedin.com/in/tomás-yovino-a0955a238/' target="_blank" rel="noopener noreferrer"><LinkedIn /></a>
              </li>
              <li className='list-inline-item'>
                <a href='https://github.com/tomasyovino' target="_blank" rel="noopener noreferrer"><GitHub /></a>
              </li>
              <li className='list-inline-item'>
                <a href='https://www.instagram.com/tomasyovino/' target="_blank" rel="noopener noreferrer"><Instagram /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content