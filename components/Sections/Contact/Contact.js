import Form from "./Form";
import Info from "./Info";

const Contact = () => {
  return (
    <section id='contact' className='row p-4'>
      <div className='col-12'>
        <div className='row'>
          <div className='col-12'>
            <div className='section-heading page-heading'>
              <p>Feel free to contact me anytimes</p>
              <h2>Get in Touch</h2>
              <div className='animated-bar'></div>
            </div>
          </div>
        </div>
        <div className='contact-content single-section'>
          <div className='row'>
            <div className="col-12 col-lg-7">
              <Form />
            </div>
            <div className="col-12 col-lg-5">
              <Info />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;