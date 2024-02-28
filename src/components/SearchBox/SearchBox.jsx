import css from "./SearchBox.module.css";

export const SearchBox = ({ filter, onSearch }) => {
  return (
    <div>
      <p className={css.label}>Search by name</p>
      <input
        type="text"
        className={css.input}
        value={filter}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};
