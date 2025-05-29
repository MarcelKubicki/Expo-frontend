import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { getExhibitors } from "../../../services/apiCatalog";

export function useExhibitors() {
  const [searchParams] = useSearchParams();
  const {
    isLoading,
    data: exhibitors,
    error,
  } = useQuery({
    queryKey: ["exhibitors", searchParams.toString()],
    queryFn: () => getExhibitors(searchParams),
  });

  return { isLoading, error, exhibitors };
}
