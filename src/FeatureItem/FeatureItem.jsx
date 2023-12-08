
import "./FeatureItem.css"


// eslint-disable-next-line react/prop-types
function FeatureItem ({logo,altText,title,description}) {
  return (
    <div className="feature-item">
      <img src={logo} alt={altText} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default FeatureItem;