import { useSearchParams } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import { useEffect } from "react";

import { clearParams } from "../../../../utils/helpers";
import SelectCategory from "../../../../ui/SelectCategory";
import SelectLocalization from "../../../../ui/SelectLocalization";
import styles from "./Selector.module.css";

function Selector() {
  const [searchParams, setSearchParams] = useSearchParams();

  const defaultValues = {
    nam: searchParams.get("nam") || "",
    cat: searchParams.get("cat") || "",
    loc: searchParams.get("loc") || "",
    sdate: searchParams.get("sdate") || "",
    edate: searchParams.get("edate") || "",
  };

  const { register, control, reset } = useForm({
    defaultValues,
    resetOptions: {
      keepDirtyValues: true,
      keepErrors: true,
    },
  });
  const watchedFields = useWatch({ control });

  useEffect(
    function () {
      const selectedFilters = clearParams(watchedFields);
      if (Object.hasOwn(selectedFilters, "nam"))
        if (selectedFilters.nam.length < 3) return;
      setSearchParams(selectedFilters);
    },
    [watchedFields, setSearchParams]
  );

  return (
    <form className={styles.selector}>
      <input
        className={styles.searchbar}
        type="search"
        placeholder="Wpisz nazwe wydarzenia..."
        autoFocus
        {...register("nam", { minLength: 3 })}
      />
      <SelectCategory register={register} className={styles.select} />
      <SelectLocalization register={register} className={styles.select} />
      <input type="date" className={styles.select} {...register("sdate")} />
      <input type="date" className={styles.select} {...register("edate")} />
      <button type="button" className={styles.resetBtn} onClick={() => reset()}>
        reset
      </button>
    </form>
  );
}

export default Selector;
