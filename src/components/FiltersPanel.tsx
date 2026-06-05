import "./FiltersPanel.css";
import mapIcon from "../assets/light-map-icon.svg";
import closeIcon from "../assets/close-icon.svg";
import type { CamperFilters } from "../types/camper";

type FiltersPanelProps = {
  filters: CamperFilters;
  setFilters: React.Dispatch<React.SetStateAction<CamperFilters>>;
  onSearch: () => void;
  onClear: () => void;
};

function FiltersPanel({
  filters,
  setFilters,
  onSearch,
  onClear,
}: FiltersPanelProps) {
  return (
    <aside className="filters-panel">
      <div className="filters-location">
        <p className="filters-label">Location</p>
        <div className="filters-location-input">
          <img src={mapIcon} alt="location-icon" />
          <input
            type="text"
            placeholder="Country, City"
            value={filters.location}
            onChange={(e) =>
              setFilters({ ...filters, location: e.target.value })
            }
          />
        </div>
      </div>
      <div className="filters-groups">
        <p className="filters-text-style">Filters</p>
        <div className="filters-group">
          <p className="filters-label">Camper form</p>
          <label>
            <input
              type="radio"
              name="camper-form"
              value="alcove"
              checked={filters.form === "alcove"}
              onChange={(e) => setFilters({ ...filters, form: e.target.value })}
            />
            Alcove
          </label>
          <label>
            <input
              type="radio"
              name="camper-form"
              value="panelTruck"
              checked={filters.form === "panelTruck"}
              onChange={(e) => setFilters({ ...filters, form: e.target.value })}
            />
            Panel Truck
          </label>
          <label>
            <input
              type="radio"
              name="camper-form"
              value="fullyIntegrated"
              checked={filters.form === "fullyIntegrated"}
              onChange={(e) => setFilters({ ...filters, form: e.target.value })}
            />
            Fully Integrated
          </label>
        </div>
        <div className="filters-group">
          <p className="filters-label">Engine</p>
          <label>
            <input
              type="radio"
              name="engine"
              value="diesel"
              checked={filters.engine === "diesel"}
              onChange={(e) =>
                setFilters({ ...filters, engine: e.target.value })
              }
            />
            Diesel
          </label>
          <label>
            <input
              type="radio"
              name="engine"
              value="petrol"
              checked={filters.engine === "petrol"}
              onChange={(e) =>
                setFilters({ ...filters, engine: e.target.value })
              }
            />
            Petrol
          </label>
          <label>
            <input
              type="radio"
              name="engine"
              value="hybrid"
              checked={filters.engine === "hybrid"}
              onChange={(e) =>
                setFilters({ ...filters, engine: e.target.value })
              }
            />
            Hybrid
          </label>
          <label>
            <input
              type="radio"
              name="engine"
              value="electric"
              checked={filters.engine === "electric"}
              onChange={(e) =>
                setFilters({ ...filters, engine: e.target.value })
              }
            />
            Electric
          </label>
        </div>
        <div className="filters-group">
          <p className="filters-label">Transmission</p>
          <label>
            <input
              type="radio"
              name="transmission"
              value="automatic"
              checked={filters.transmission === "automatic"}
              onChange={(e) =>
                setFilters({ ...filters, transmission: e.target.value })
              }
            />
            Automatic
          </label>

          <label>
            <input
              type="radio"
              name="transmission"
              value="manual"
              checked={filters.transmission === "manual"}
              onChange={(e) =>
                setFilters({ ...filters, transmission: e.target.value })
              }
            />
            Manual
          </label>
        </div>
      </div>
      <div className="filters-actions">
        <button
          className="filters-search-button"
          type="button"
          onClick={onSearch}
        >
          Search
        </button>
        <button
          className="filters-clear-button"
          type="button"
          onClick={onClear}
        >
          <img src={closeIcon} alt="close-icon" />
          Clear filters
        </button>
      </div>
    </aside>
  );
}

export default FiltersPanel;
