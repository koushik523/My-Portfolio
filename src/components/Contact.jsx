import '../css/contact.css';
import { useState } from 'react';

const Contact = () => {
  const form_id = "xqazjwbn";
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [showAlert, setShowAlert] = useState(false); // State to control the custom alert box

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send form data to Formspree
    const response = await fetch(`https://formspree.io/f/${form_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
      setShowAlert(true);
    } else {
      setShowAlert(true);
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
    if (submitted) {
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: '',
      });
    }
  };
  return (
    <div className='contact-container'>
      <h1>Contact <span>Me!</span></h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder='Full Name'
            autocomplete="fullname"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Email Address'
            autocomplete="email"
            required
          />
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder='Mobile Number'
            autocomplete="phonenumber"
            required
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder='Email Subject'
            autocomplete="subject"
            required
          />
        </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder='Your Message'
            autocomplete="message"
            required
          />

        <button className='contact-button' type="submit" >Submit</button>
      </form>

      {/* Custom Alert Box */}
      {showAlert && (
        <div className="alert-box">
          <div className="alert-content">
            <h3>{submitted ? 'Message Sent!' : 'Error'}</h3>
            <p>
              {submitted
                ? 'Thank you for your message. I will get back to you soon.'
                : 'There was an issue submitting your message. Please try again.'}
            </p>
            <button onClick={closeAlert}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Contact