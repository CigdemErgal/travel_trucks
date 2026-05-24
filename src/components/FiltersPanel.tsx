import "./FiltersPanel.css";

function FiltersPanel() {
  return (
    <aside className="filters-panel">
      <div className="filters-location">
        <p>Location</p>
        <input type="text" />
      </div>
      <div className="filters-groups">
        <p>Filters</p>
        <p>Camper form</p>
        <label>
          <input type="radio" name="camper-form" />
          Alcove
        </label>
        <label>
          <input type="radio" name="camper-form" />
          Panel Van
        </label>
        <label>
          <input type="radio" name="camper-form" />
          Integrated
        </label>
        <label>
          <input type="radio" name="camper-form" />
          Semi Integrated
        </label>
        <p>Engine</p>
        <label>
          <input type="radio" name="engine" />
          Diesel
        </label>
        <label>
          <input type="radio" name="engine" />
          Petrol
        </label>
        <label>
          <input type="radio" name="engine" />
          Hybrid
        </label>
        <label>
          <input type="radio" name="engine" />
          Electric
        </label>
        <p>Transmission</p>

        <label>
          <input type="radio" name="transmission" />
          Automatic
        </label>

        <label>
          <input type="radio" name="transmission" />
          Manual
        </label>
      </div>
      <div className="filters-actions">
        <button type="button">Search</button>
        <button type="button">Clear</button>
      </div>
    </aside>
  );
}

export default FiltersPanel;
