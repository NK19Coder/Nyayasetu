import Popup from "../components/popup/Popup";
import {useState} from 'react';
// import 'Popup.css'
const Contact = () => {
  const [buttonPopup,setButtonPopup] =useState(false);
  return <section>
    <div className="px-4 mx-auto max-w-screen-md">
      <h2 className='heading text-center'>Contact Us</h2>
      <p className='mb-8 lg:mb-16 font-light text-center text__para'>Got a technical issue? Want to send feedback about a beta feature? Let us know.</p>
      <form action="#" className='space-y-8'>
        <div>
          <label htmlFor="email" className='form__label'>Your Email </label>
          <input type="email" id='email' placeholder='example@gmail.com' className='form__input mt-1'/>
        </div>

        <div>
          <label htmlFor="subject" className='form__label'>Subject </label>
          <input type="text" id='subject' placeholder='Let us know how we can help you.' className='form__input mt-1'/>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className='form__label'>Your Message </label>
          <textarea rows='6' type="text" id='message' placeholder='Enter your message.' className='form__input mt-1'/>
        </div>
        <button onClick={()=> setButtonPopup(true)} type="submit" className="btn rounded sm:w-fit">Submit</button>
        
      </form>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h2 className="text">Your Form has been submitted</h2>
        </Popup>
    </div>
  </section>
}

export default Contact;
