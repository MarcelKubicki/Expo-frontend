import { categories } from "../../data/categories";

function SelectCategory({
  category,
  setCategory,
  disabled = false,
  className,
  required = false,
}) {
  return (
    <select
      className={className}
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      disabled={disabled}
      required={required}
    >
      <option selected value="">
        Kategoria
      </option>
      {categories.map((c) => (
        <option key={c.value} value={c.value}>
          {c.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCategory;
