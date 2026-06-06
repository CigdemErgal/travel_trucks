import { Link } from "react-router-dom";
import "./CamperCard.css";
import mapIcon from "../assets/light-map-icon.svg";
import petrolIcon from "../assets/petrol-icon.svg";
import automaticIcon from "../assets/automatic-icon.svg";
import alcoveIcon from "../assets/camper-icon.svg";
import starIcon from "../assets/yellow-star-icon.svg";

type CamperCardProps = {
  name: string;
  price: number;
  location: string;
  id: string;
  imageUrl: string;
  rating: number;
  reviewsCount: number;
};

function CamperCard({
  name,
  price,
  location,
  id,
  imageUrl,
  rating,
  reviewsCount,
}: CamperCardProps) {
  return (
    <article className="camper-card">
      <img className="camper-card-image" src={imageUrl} alt={name} />
      <div className="camper-card-content">
        <div className="camper-card-header">
          <p>{name}</p>
          <p className="camper-card-price">${price}</p>
        </div>
        <div className="camper-card-meta">
          <div className="camper-card-rating">
            <img src={starIcon} alt="Star Icon" />
            <p>
              {rating}({reviewsCount} Reviews)
            </p>
          </div>

          <div className="camper-card-location">
            <img src={mapIcon} alt="Map Icon" />
            <p>{location}</p>
          </div>
        </div>

        <p className="camper-card-description">
          The pictures shown here are example vehicles
        </p>

        <div className="camper-card-badges">
          <span>
            <img src={petrolIcon} alt="Petrol Icon" /> Petrol
          </span>
          <span>
            <img src={automaticIcon} alt="Automatic Icon" /> Automatic
          </span>
          <span>
            <img src={alcoveIcon} alt="Alcove Icon" /> Alcove
          </span>
        </div>
        <Link className="camper-card-link" to={`/catalog/${id}`}>
          Show More
        </Link>
      </div>
    </article>
  );
}

export default CamperCard;
