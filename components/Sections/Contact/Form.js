import React from 'react'

const Form = () => {
  return (
    <form className='contact-form' id='contact-form' autocomplete="off">
      <h4>Message Me</h4>
      <div className='row'>
        <div className='col-12 col-md-6 form-group'>
          <input className='form-control' id='contact-name' type='text' name='name' placeholder='Name' />
        </div>
        <div className='col-12 col-md-6 form-group'>
          <input className='form-control' id='contact-email' type='email' name='email' placeholder='Email' />
        </div>
        <div className='col-12 form-group'>
          <input className='form-control' id='contact-subject' type='text' name='subject' placeholder='Subject' />
        </div>
        <div className='col-12 form-group form-message'>
          <textarea className='form-control' id='contact-message' name='message' placeholder='Message' rows='5' />
        </div>
        <div className='col-12 form-submit'>
          <button className='btn button-main button-scheme' id='contact-submit' type='submit'>Send Message</button>
          <p className='contact-feedback' style={{display: "none"}}></p>
        </div>
      </div>
    </form>
  )
}

export default Form