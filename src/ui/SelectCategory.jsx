import { categories } from "../../data/categories";

function SelectCategory({
  register,
  className,
  disabled = false,
  required = false,
  id = "select",
}) {
  return (
    <select
      id={id}
      className={className}
      disabled={disabled}
      required={required}
      defaultValue={""}
      {...register("cat")}
    >
      <option value="">Kategoria</option>
      {categories.map((c) => (
        <option key={c.value} value={c.value}>
          {c.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCategory;
