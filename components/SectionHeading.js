import React from 'react'

const SectionHeading = ({ paragraph, subtitle }) => {
  return (
    <div className="row">
        <div className="col-12">
            <div className="section-heading page-heading">
                <p>{paragraph}</p>
                <h2>{subtitle}</h2>
                <div className='animated-bar'></div>
            </div>
        </div>
    </div>
  )
}

export default SectionHeading