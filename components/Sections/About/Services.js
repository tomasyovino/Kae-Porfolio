import { Whatshot, Storage, OpenWith, Web, Analytics, SupervisorAccount } from '@mui/icons-material/';

const Services = ({ services }) => {
  return (
    <div className='about-services single-section'>
      <div className='row'>
        <div className='col-12'>
          <div className='section-heading'>
            <p>{services.sectionHeading.paragraph}</p>
            <h2>{services.sectionHeading.subtitle}</h2>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-12 col-md-6 col-lg-4'>
          <div className='single-service'>
            <i><Web /></i>
            <h6>{services.singleService[0].subtitle}</h6>
            <p>{services.singleService[0].paragraph}</p>
          </div>
        </div>
        <div className='col-12 col-md-6 col-lg-4'>
          <div className='single-service'>
            <i><Storage /></i>
            <h6>{services.singleService[1].subtitle}</h6>
            <p>{services.singleService[1].paragraph}</p>
          </div>
        </div>
        <div className='col-12 col-md-6 col-lg-4'>
          <div className='single-service'>
            <i><OpenWith /></i>
            <h6>{services.singleService[2].subtitle}</h6>
            <p>{services.singleService[2].paragraph}</p>
          </div>
        </div>
        <div className='col-12 col-md-6 col-lg-4'>
          <div className='single-service'>
            <i><Whatshot /></i>
            <h6>{services.singleService[3].subtitle}</h6>
            <p>{services.singleService[3].paragraph}</p>
          </div>
        </div>
        <div className='col-12 col-md-6 col-lg-4'>
          <div className='single-service'>
            <i><Analytics /></i>
            <h6>{services.singleService[4].subtitle}</h6>
            <p>{services.singleService[4].paragraph}</p>
          </div>
        </div>
        <div className='col-12 col-md-6 col-lg-4'>
          <div className='single-service'>
            <i><SupervisorAccount /></i>
            <h6>{services.singleService[5].subtitle}</h6>
            <p>{services.singleService[5].paragraph}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services