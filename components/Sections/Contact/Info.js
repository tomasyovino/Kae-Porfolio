import { Code, Map, Call, Send } from '@mui/icons-material';

const Info = ({ info }) => {
  return (
    <div className='contact-info'>
      <h4>{info.title}</h4>
      <p>{info.paragraph}</p>
      <ul className='list-unstyled list-info'>
        <li>
          <div className='media align-items-center'>
            <Code className='info-icon' />
            <div className='media-body info-details'>
              <h6>{info.details.name}</h6>
              <span>Tomás Yovino</span>
            </div>
          </div>
        </li>
        <li>
          <div className='media align-items-center'>
            <Map className='info-icon' />
            <div className='media-body info-details'>
              <h6>{info.details.address}</h6>
              <span>Lanús, Buenos Aires, Argentina</span>
            </div>
          </div>
        </li>
        <li>
          <div className='media align-items-center'>
            <Call className='info-icon' />
            <div className='media-body info-details'>
              <h6>{info.details.phone}</h6>
              <a href='https://wa.me/1139112892' target="_blank" rel="noopener noreferrer"><span>+54 9 113911 2892</span></a>
            </div>
          </div>
        </li>
        <li>
          <div className='media align-items-center'>
            <Send className='info-icon' />
            <div className='media-body info-details'>
              <h6>{info.details.email}</h6>
              <a href='mailto:tomasyovino@gmail.com' target="_blank" rel="noopener noreferrer"><span>tomasyovino@gmail.com</span></a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Info