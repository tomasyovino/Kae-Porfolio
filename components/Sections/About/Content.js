import { Twitter, AlternateEmail, LinkedIn, GitHub, Instagram } from '@mui/icons-material';

const Content = ({ content }) => {
  return (
    <div className='about-info single-section'>
      <div className='row align-items-center'>
        {/* <!-- Picture part--> */}
        <div className='col-12 col-lg-5 info-img'>
          <span>Imagen</span>
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
                <a href='mailto:random@example.com'>
                  <p>example@gmail.com</p>
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
            <a href='#' className='btn content-download'>{content.info.buttonCV}</a>
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
  )
}

export default Content