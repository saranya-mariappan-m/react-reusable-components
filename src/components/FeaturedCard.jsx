import '../index.css';
import { ImageCard, FeaturedLabels } from './data.json';
import PropTypes from 'prop-types';

const FeaturedCard = () => {

  const Featured = ({
    iconName,
    title,
    description,
  }) => {
    return (
      <div className="col-lg-4">
        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
          <div className="features-icons-icon d-flex"><i className={`m-auto text-primary ${iconName}`}></i></div>
          <h3>{title}</h3>
          <p className="lead mb-0">{description}</p>
        </div>
      </div>
    )
  };

  Featured.propTypes = {
    iconName: PropTypes.string,
    title: PropTypes.string.isRequired, // Must Have prop
    description: PropTypes.string,
  }

  const ShowCase = ({
    title,
    description,
    image,
    index
  }) => {
    console.log(index);
    return (
      <div className="row g-0">
        <div className={`col-lg-6 text-white showcase-img ${index % 2 === 0 ? "order-lg-2" : ""}`}>
          <img src={image} alt="SampleImage" style={{
            height: "auto",
            width: "100%"
          }} />
        </div>
        <div className={`col-lg-6 my-auto showcase-text ${index % 2 === 0 ? "order-lg-1" : ""}`}>
          <h2>{title}</h2>
          <p className="lead mb-0">{description}</p>
        </div>
      </div>
    )
  };

  ShowCase.propTypes = {
    title: PropTypes.string.isRequired, // Must Have prop
    description: PropTypes.string,
    image: PropTypes.string,
    index: PropTypes.number
  }


  return (
    <>
      <div className="features-icons ps-6 bg-light text-center" >
        <div className="container">
          <div className="row">
            {ImageCard.map((details) => (
              <Featured
                {...details}
                key={details.title}
              />
            ))}
          </div>
        </div>
      </div >
      <div className="showcase">
        <div className="container-fluid p-0">
          {FeaturedLabels.map((details, index) => (
            <ShowCase
              {...details}
              index={index}
              key={details.title}
            />
          ))}
        </div>
      </div>
    </>


  )

}

export default FeaturedCard