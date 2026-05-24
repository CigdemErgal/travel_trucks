import { Link } from "react-router-dom";

type CamperCardProps = {
  name: string;
  price: number;
  location: string;
  id: string;
  imageUrl: string;
};

function CamperCard({ name, price, location, id, imageUrl }: CamperCardProps) {
  return (
    <>
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
      <p>{price}</p>
      <p>{location}</p>
      <Link to={`/catalog/${id}`}>Show More</Link>
    </>
  );
}

export default CamperCard;
