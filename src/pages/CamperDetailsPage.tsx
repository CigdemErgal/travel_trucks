import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCamperById } from "../services/campersApi";
import type { Camper } from "../types/camper";

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
      <h1>Camper Details Page</h1>
      <p>Camper ID: {id}</p>
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <p>{camper?.name}</p>
          <p>{camper?.price}</p>
          <p>{camper?.location}</p>

          <img src={camper?.gallery?.[0]?.thumb} alt={camper?.name} />

          {camper?.gallery?.slice(1).map((image, index) => (
            <img key={index} src={image.thumb} alt={camper?.name} />
          ))}
        </>
      )}
    </>
  );
}

export default CamperDetailsPage;
