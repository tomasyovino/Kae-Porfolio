import Form from "../Sections/Contact/Form";
import Info from "../Sections/Contact/Info";
import SectionHeading from "../SectionHeading";

const ContactScreen = ({ contact }) => {
  return (
    <section id='contact' className='row p-4'>
      <div className='col-12'>
        <SectionHeading sectionHeading={contact.sectionHeading} />
        <div className='contact-content single-section'>
          <div className='row'>
            <div className="col-12 col-lg-7">
              <Form form={contact.form} />
            </div>
            <div className="col-12 col-lg-5">
              <Info info={contact.info} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactScreen