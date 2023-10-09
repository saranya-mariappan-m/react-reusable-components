import { blueBackground, callToAction, headerNav } from './common.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const FeaturedBanners = ({ showHeader }) => {

  const FormComponent = () => {

    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [formSubmitted, setFormSubmission] = useState(false);

    const handleEmailChange = (e) => {
      console.log('called on focus');
      const inputValue = e.target.value;
      setEmail(inputValue);

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsValidEmail(emailRegex.test(inputValue));
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      if (isValidEmail && email !== '') {
        // Handle form submission, e.g., send the email
        setFormSubmission(true);
        console.log('Email submitted:', email);
      } else {
        alert('Please enter a valid email address.');
      }
    };
    return (
      <form className="form-subscribe" id="contactForm" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <input className={`form-control form-control-lg ${isValidEmail ? '' : 'is-invalid'}`} id="emailAddress" type="email" placeholder="Email Address" value={email}
              onChange={handleEmailChange}
            />

            {!isValidEmail && (
              <>
                <div className="invalid-feedback text-white">Email Address is required.</div>
                <div className="invalid-feedback text-white">Email Address Email is not valid.</div>
              </>
            )}

          </div>
          <div className="col-auto"><button className={`btn btn-primary btn-lg ${isValidEmail ? '' : 'disabled'}`} id="submitButton" type="submit">Submit</button></div>
        </div>
        <div className={`${formSubmitted ? isValidEmail ? 'd-block' : 'd-none' : 'd-none'}`} id="submitSuccessMessage">
          <div className="text-center mb-3">
            <div className="fw-bolder">Form submission successful!</div>
            <p>To activate this form, sign up at</p>
            <a className="text-white" href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
          </div>
        </div>
      </form>
    )
  }

  const Header = () => {
    return (<>
      <header className={`masthead ${headerNav}  ${blueBackground}`}>
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="text-center text-white">
                <h1 className="mb-5">Generate more leads with a professional landing page!</h1>
                <FormComponent />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>)
  }

  const Footer = () => {
    return (
      <div className={`text-white text-center ${callToAction} ${blueBackground}`} id="signup">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <h2 className="mb-4">Ready to get started? Sign up now!</h2>
              <FormComponent />
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
      {showHeader ? (
        <Header />) : (<Footer />)}
    </>
  )


}

FeaturedBanners.propTypes = {
  showHeader: PropTypes.bool, // Must Have to update Cart value
}
export default FeaturedBanners