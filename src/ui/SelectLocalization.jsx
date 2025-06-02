function SelectLocalization({ register, className, required = false }) {
  return (
    <select
      className={className}
      required={required}
      defaultValue={""}
      {...register("loc")}
    >
      <option value="">Lokalizacja</option>
      <option value="Kielce">Kielce</option>
      <option value="Warszawa">Warszawa</option>
    </select>
  );
}

export default SelectLocalization;
