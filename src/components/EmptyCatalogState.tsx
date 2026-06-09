import "./EmptyCatalogState.css";

type EmptyCatalogStateProps = {
  onBackToFullCatalog: () => void;
};

function EmptyCatalogState({ onBackToFullCatalog }: EmptyCatalogStateProps) {
  return (
    <div className="empty-catalog-state">
      <h2>No campers found</h2>
      <p>Try changing your filters or go back to the full catalog.</p>
      <button type="button" onClick={onBackToFullCatalog}>
        Back to full catalog
      </button>
    </div>
  );
}

export default EmptyCatalogState;
