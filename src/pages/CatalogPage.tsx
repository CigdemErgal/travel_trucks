import Header from "../components/Header";
import { useEffect, useState } from "react";
import { fetchCampers } from "../services/campersApi";
import CamperCard from "../components/CamperCard";
import type { Camper, CamperFilters } from "../types/camper";
import FiltersPanel from "../components/FiltersPanel";
import "./CatalogPage.css";

function CatalogPage() {
  const [campers, setCampers] = useState<Camper[]>([]);
  const [loading, setLoading] = useState(true);
  const [filteredCampers, setFilteredCampers] = useState<Camper[]>([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const initialFilters: CamperFilters = {
    location: "",
    form: "",
    engine: "",
    transmission: "",
  };
  const [filters, setFilters] = useState<CamperFilters>(initialFilters);

  useEffect(() => {
    fetchCampers().then((data) => {
      setCampers(data);
      setFilteredCampers(data);
      setLoading(false);
    });
  }, []);

  const handleSearch = () => {
    const result = campers.filter(
      (camper) =>
        camper.location
          .toLowerCase()
          .includes(filters.location.toLowerCase()) &&
        (filters.form === "" || camper.form.includes(filters.form)) &&
        (filters.engine === "" || camper.engine.includes(filters.engine)) &&
        (filters.transmission === "" ||
          camper.transmission.includes(filters.transmission)),
    );
    setFilteredCampers(result);
    setVisibleCount(4);
  };

  const handleClearFilters = () => {
    setFilters(initialFilters);
    setFilteredCampers(campers);
    setVisibleCount(4);
  };

  return (
    <>
      <Header />
      <section className="catalog-layout">
        <FiltersPanel
          filters={filters}
          setFilters={setFilters}
          onSearch={handleSearch}
          onClear={handleClearFilters}
        />
        <div className="catalog-content">
          {loading && <p>Loading...</p>}

          {!loading &&
            filteredCampers
              .slice(0, visibleCount)
              .map((camper) => (
                <CamperCard
                  key={camper.id}
                  name={camper.name}
                  price={camper.price}
                  location={camper.location}
                  id={camper.id}
                  imageUrl={camper.gallery[0].thumb}
                  rating={camper.rating}
                  reviewsCount={camper.reviews.length}
                />
              ))}
          {!loading && visibleCount < filteredCampers.length && (
            <button
              className="load-more-button"
              onClick={() => setVisibleCount((prev) => prev + 4)}
            >
              Load More
            </button>
          )}
        </div>
      </section>
    </>
  );
}

export default CatalogPage;
