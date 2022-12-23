import { useState } from "react";
import LoadingSpinnerButton from "./LoadingSpinnerButton";

const Form = ({ form }) => {
  const [ name, setName ] = useState();
  const [ email, setEmail ] = useState();
  const [ subject, setSubject ] = useState();
  const [ message, setMessage ] = useState();
  const [buttonLoader, setButtonLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonLoader(true);
    let details = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    let response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },

      body: JSON.stringify(details),
    });
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setButtonLoader(false);

    let result = await response.json();
    alert(result.buttonLoader);
  }

  return (
    <form 
      className='contact-form' 
      id='contact-form' 
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <h4>{form.title}</h4>
      <div className='row'>
        <div className='col-12 col-md-6 form-group'>
          <input 
            className='form-control' 
            id='contact-name' 
            type='text' 
            name='name' 
            placeholder={form.inputPlaceholder[0]} 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='col-12 col-md-6 form-group'>
          <input 
            className='form-control' 
            id='contact-email' 
            type='email' 
            name='email' 
            placeholder={form.inputPlaceholder[1]}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='col-12 form-group'>
          <input 
            className='form-control' 
            id='contact-subject' 
            type='text' 
            name='subject' 
            placeholder={form.inputPlaceholder[2]}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className='col-12 form-group form-message'>
          <textarea 
            className='form-control' 
            id='contact-message' 
            type='text'
            name='message' 
            placeholder={form.inputPlaceholder[3]}
            rows='5' 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className='col-12 form-submit'>
          <LoadingSpinnerButton buttonText={form.buttonText} buttonLoader={buttonLoader} />
          <p className='contact-feedback' style={{display: "none"}}></p>
        </div>
      </div>
    </form>
  )
}

export default Form