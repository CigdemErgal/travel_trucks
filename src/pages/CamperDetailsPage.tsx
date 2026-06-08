import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCamperById } from "../services/campersApi";
import type { Camper } from "../types/camper";
import starIcon from "../assets/yellow-star-icon.svg";
import mapIcon from "../assets/light-map-icon.svg";
import grayStarIcon from "../assets/gray-star-icon.svg";
import "./CamperDetailsPage.css";

function CamperDetailsPage() {
  const { id } = useParams();
  const [camper, setCamper] = useState<Camper | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!id) return;

    fetchCamperById(id).then((data) => {
      setCamper(data);
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      <Header />
      {loading && <p>Loading...</p>}

      {!loading && camper && (
        <main className="camper-details-page">
          <section className="camper-details-layout">
            <div className="details-main">
              <img
                className="details-main-image"
                src={camper.gallery?.[0]?.original}
                alt={camper.name}
              />
              <div className="details-gallery">
                {camper.gallery?.map((image, index) => (
                  <img key={index} src={image.thumb} alt={camper.name} />
                ))}
              </div>
            </div>
            <aside className="details-sidebar">
              <section className="details-summary">
                <h1>{camper.name}</h1>

                <div className="details-meta">
                  <span className="details-rating">
                    <img src={starIcon} alt="Star Icon" />
                    {camper.rating} ({camper.reviews.length} Reviews)
                  </span>

                  <span className="details-location">
                    <img src={mapIcon} alt="Map Icon" />
                    {camper.location}
                  </span>
                </div>

                <p className="details-price">${camper.price.toFixed(2)}</p>
                <p className="details-description">{camper.description}</p>
              </section>

              <section className="details-vehicle">
                <h2>Vehicle Details</h2>
                <div className="vehicle-features">
                  <span>{camper.transmission}</span>
                  {camper.AC && <span>AC</span>}
                  <span>{camper.engine}</span>
                  {camper.kitchen && <span>Kitchen</span>}
                  {camper.radio && <span>Radio</span>}
                  <span>{camper.form}</span>
                </div>

                <ul className="vehicle-details-list">
                  <li>
                    <span>Form</span>
                    <span>{camper.form}</span>
                  </li>
                  <li>
                    <span>Length</span>
                    <span>{camper.length}</span>
                  </li>
                  <li>
                    <span>Width</span>
                    <span>{camper.width}</span>
                  </li>
                  <li>
                    <span>Height</span>
                    <span>{camper.height}</span>
                  </li>
                  <li>
                    <span>Tank</span>
                    <span>{camper.tank}</span>
                  </li>
                  <li>
                    <span>Consumption</span>
                    <span>{camper.consumption}</span>
                  </li>
                </ul>
              </section>
            </aside>
          </section>
          <h2 className="details-reviews-title">Reviews</h2>
          <div className="details-bottom">
            <section className="details-reviews">
              <div className="reviews-list">
                {camper.reviews.map((review) => (
                  <article className="review-card" key={review.reviewer_name}>
                    <div className="review-header">
                      <div className="review-avatar">
                        {review.reviewer_name.charAt(0).toUpperCase()}
                      </div>
                      <div className="review-user-info">
                        <p className="review-name">{review.reviewer_name}</p>
                        <div className="review-rating">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <img
                              key={index}
                              src={
                                index < review.reviewer_rating
                                  ? starIcon
                                  : grayStarIcon
                              }
                              alt="Star Icon"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="review-comment">{review.comment}</p>
                  </article>
                ))}
              </div>
            </section>
            <section className="details-booking">
              <h2>Book your campervan now</h2>
              <p> Stay connected! We are always ready to help you.</p>

              <form
                className="booking-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  alert("Booking request sent successfully!");
                }}
              >
                <input type="text" name="name" placeholder="Name*" required />
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  required
                />
                <button type="submit">Send</button>
              </form>
            </section>
          </div>
        </main>
      )}
    </>
  );
}

export default CamperDetailsPage;
