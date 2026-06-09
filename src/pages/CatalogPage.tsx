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
  applyFilters,
} from "../redux/campersSlice";
import type { AppDispatch, RootState } from "../redux/store";
import "./CatalogPage.css";
import EmptyCatalogState from "../components/EmptyCatalogState";

function CatalogPage() {
  const dispatch = useDispatch<AppDispatch>();

  const { items, loading, error, filters, appliedFilters, favorites } =
    useSelector((state: RootState) => state.campers);

  const [visibleCount, setVisibleCount] = useState(4);

  const filteredItems = items.filter((camper) => {
    if (appliedFilters.AC && !camper.AC) return false;
    if (appliedFilters.bathroom && !camper.bathroom) return false;
    if (appliedFilters.kitchen && !camper.kitchen) return false;
    if (appliedFilters.TV && !camper.TV) return false;
    if (appliedFilters.radio && !camper.radio) return false;
    if (appliedFilters.refrigerator && !camper.refrigerator) return false;
    if (appliedFilters.microwave && !camper.microwave) return false;
    if (appliedFilters.gas && !camper.gas) return false;
    if (appliedFilters.water && !camper.water) return false;

    return true;
  });

  useEffect(() => {
    dispatch(fetchCampersThunk(appliedFilters));
  }, [dispatch, appliedFilters]);

  const handleSearch = () => {
    setVisibleCount(4);
    dispatch(applyFilters());
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
    setVisibleCount(4);
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
          {!loading && !error && filteredItems.length === 0 && (
            <EmptyCatalogState onBackToFullCatalog={handleClearFilters} />
          )}
          {!loading &&
            filteredItems
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
          {!loading && visibleCount < filteredItems.length && (
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
