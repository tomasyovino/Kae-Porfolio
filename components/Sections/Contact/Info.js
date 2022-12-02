import { Code, Map, Call, Send } from '@mui/icons-material';

const Info = () => {
  return (
    <div className='contact-info'>
      <h4>Contact Info</h4>
      <p>Always available for freelance work if the right project comes along, Feel free to contact me!</p>
      <ul className='list-unstyled list-info'>
        <li>
          <div className='media align-items-center'>
            <Code className='info-icon' />
            <div className='media-body info-details'>
              <h6>Name</h6>
              <span>Tomás Yovino</span>
            </div>
          </div>
        </li>
        <li>
          <div className='media align-items-center'>
            <Map className='info-icon' />
            <div className='media-body info-details'>
              <h6>Dirección</h6>
              <span>Lanús Oeste, Buenos Aires, Argentina</span>
            </div>
          </div>
        </li>
        <li>
          <div className='media align-items-center'>
            <Call className='info-icon' />
            <div className='media-body info-details'>
              <h6>Call Me</h6>
              <a href='#'><span>+54 9 113911 2892</span></a>
            </div>
          </div>
        </li>
        <li>
          <div className='media align-items-center'>
            <Send className='info-icon' />
            <div className='media-body info-details'>
              <h6>Email Me</h6>
              <a href='#'><span>tomasyovino@gmail.com</span></a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Info