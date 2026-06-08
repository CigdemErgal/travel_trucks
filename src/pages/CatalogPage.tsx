import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CamperCard from "../components/CamperCard";
import FiltersPanel from "../components/FiltersPanel";
import {
  clearFilters,
  fetchCampersThunk,
  setFilters,
  toggleFavorite,
} from "../redux/campersSlice";
import type { AppDispatch, RootState } from "../redux/store";
import "./CatalogPage.css";

function CatalogPage() {
  const dispatch = useDispatch<AppDispatch>();

  const { items, loading, error, filters, favorites } = useSelector(
    (state: RootState) => state.campers,
  );

  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    dispatch(fetchCampersThunk(filters));
  }, [dispatch]);

  const handleSearch = () => {
    setVisibleCount(4);
    dispatch(fetchCampersThunk(filters));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
    setVisibleCount(4);
    dispatch(
      fetchCampersThunk({
        location: "",
        form: "",
        engine: "",
        transmission: "",
        AC: false,
        bathroom: false,
        kitchen: false,
        TV: false,
        radio: false,
        refrigerator: false,
        microwave: false,
        gas: false,
        water: false,
      }),
    );
  };

  return (
    <>
      <Header />
      <section className="catalog-layout">
        <FiltersPanel
          filters={filters}
          setFilters={(newFilters) => dispatch(setFilters(newFilters))}
          onSearch={handleSearch}
          onClear={handleClearFilters}
        />
        <div className="catalog-content">
          {loading && <p>Loading...</p>}
          {error && <p className="catalog-error">{error}</p>}

          {!loading &&
            items
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
                  description={camper.description}
                  transmission={camper.transmission}
                  engine={camper.engine}
                  form={camper.form}
                  AC={camper.AC}
                  bathroom={camper.bathroom}
                  kitchen={camper.kitchen}
                  TV={camper.TV}
                  radio={camper.radio}
                  refrigerator={camper.refrigerator}
                  microwave={camper.microwave}
                  gas={camper.gas}
                  water={camper.water}
                  isFavorite={favorites.includes(camper.id)}
                  onToggleFavorite={() => dispatch(toggleFavorite(camper.id))}
                />
              ))}
          {!loading && visibleCount < items.length && (
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
