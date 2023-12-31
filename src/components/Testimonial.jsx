import '../index.css';
import { TestimonialsData } from './data.json';
import PropTypes from 'prop-types';

const Testimonials = () => {
  const TestimonialSection = ({
    name,
    content,
    image
  }) => {
    return (
      <div className="col-lg-4">
        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
          <img className="img-fluid rounded-circle mb-3" src={image} alt="SampleImage" />
          <h5>{name}</h5>
          <p className="font-weight-light mb-0">&quot;{content}&quot;</p>
        </div>
      </div>
    )
  };

  TestimonialSection.propTypes = {
    name: PropTypes.string.isRequired, // Must Have prop
    content: PropTypes.string,
    image: PropTypes.string
  }


  return (
    <>
      <div className="testimonials text-center bg-light">
        <div className="container">
          <h2 className="mb-5">What people are saying...</h2>
          <div className="row">
            {TestimonialsData.map((details) => (
              <TestimonialSection
                {...details}
                key={details.name}
              />
            ))}
          </div>
        </div>
      </div>
    </>


  )


}

export default Testimonials