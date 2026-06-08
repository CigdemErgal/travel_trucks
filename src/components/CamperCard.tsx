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
  description: string;
  transmission: string;
  engine: string;
  form: string;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  isFavorite: boolean;
  onToggleFavorite: () => void;
};

function CamperCard({
  name,
  price,
  location,
  id,
  imageUrl,
  rating,
  reviewsCount,
  description,
  transmission,
  engine,
  form,
  AC,
  bathroom,
  kitchen,
  TV,
  radio,
  refrigerator,
  microwave,
  gas,
  water,
  isFavorite,
  onToggleFavorite,
}: CamperCardProps) {
  return (
    <article className="camper-card">
      <img className="camper-card-image" src={imageUrl} alt={name} />
      <div className="camper-card-content">
        <div className="camper-card-header">
          <p>{name}</p>
          <div className="camper-card-header-actions">
            <p className="camper-card-price">${price.toFixed(2)}</p>
            <button 
              className={`camper-card-favorite ${isFavorite ? "is-active" : ""}`}
              type="button"
              onClick={onToggleFavorite}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            &hearts;
          </button>
        </div>
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
          {description}
        </p>

        <div className="camper-card-badges">
          <span>
            <img src={petrolIcon} alt="" /> {engine}
          </span>
          <span>
            <img src={automaticIcon} alt="" /> {transmission}
          </span>
          <span>
            <img src={alcoveIcon} alt="" /> {form}
            
          </span>
          {AC && <span>AC</span>}
          {bathroom && <span>Bathroom</span>}
          {kitchen && <span>Kitchen</span>}
          {TV && <span>TV</span>}
          {radio && <span>Radio</span>}
          {refrigerator && <span>Refrigerator</span>}
          {microwave && <span>Microwave</span>}
          {gas && <span>Gas</span>}
          {water && <span>Water</span>}
        </div>
        <Link className="camper-card-link" 
        to={`/catalog/${id}`}
        target="_blank"
        rel="noopener noreferrer">
          Show More
        </Link>
      </div>
    </article>
  );
}

export default CamperCard;
