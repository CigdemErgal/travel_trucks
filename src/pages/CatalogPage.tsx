import Header from "../components/Header";
import { useEffect, useState } from "react";
import { fetchCampers } from "../services/campersApi";
import CamperCard from "../components/CamperCard";
import type { Camper } from "../types/camper";
import FiltersPanel from "../components/FiltersPanel";
import "./CatalogPage.css";

function CatalogPage() {
  const [campers, setCampers] = useState<Camper[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCampers().then((data) => {
      setCampers(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Header />
      <section className="catalog-layout">
        <FiltersPanel />
        <div className="catalog-content">
          {loading && <p>Loading...</p>}
          {!loading && <p>Camper count: {campers.length}</p>}
          {!loading &&
            campers.map((camper) => (
              <CamperCard
                key={camper.id}
                name={camper.name}
                price={camper.price}
                location={camper.location}
                id={camper.id}
                imageUrl={camper.gallery[0].thumb}
              />
            ))}
        </div>
      </section>
    </>
  );
}

export default CatalogPage;
