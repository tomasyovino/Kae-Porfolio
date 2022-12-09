import React from 'react'

const SectionHeading = ({ sectionHeading }) => {
  
  return (
    <div className="row">
        <div className="col-12">
            <div className="section-heading page-heading">
                <p>{sectionHeading.paragraph}</p>
                <h2>{sectionHeading.subtitle}</h2>
                <div className='animated-bar'></div>
            </div>
        </div>
    </div>
  )
}

export default SectionHeading