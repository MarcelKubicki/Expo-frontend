function SelectLocalization({
  localization,
  setLocalization,
  className,
  required = false,
}) {
  return (
    <select
      className={className}
      value={localization}
      onChange={(e) => setLocalization(e.target.value)}
      required={required}
    >
      <option selected value="">
        Lokalizacja
      </option>
      <option value="Kielce">Kielce</option>
      <option value="Warszawa">Warszawa</option>
    </select>
  );
}

export default SelectLocalization;
