import Form from "../Sections/Contact/Form";
import Info from "../Sections/Contact/Info";
import SectionHeading from "../SectionHeading";

const ContactScreen = () => {
  return (
    <section id='contact' className='row p-4'>
      <div className='col-12'>
        <SectionHeading paragraph={"Feel free to contact me anytimes"} subtitle={"Get in Touch"} />
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
  )
}

export default ContactScreen