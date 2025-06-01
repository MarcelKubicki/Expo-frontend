import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { getExhibInfo } from "../../../services/apiCatalog";

export function useExhibitor() {
  const { exhibitorId } = useParams();

  const { isLoading, data, error } = useQuery({
    queryKey: ["exhibitor", exhibitorId],
    queryFn: () => getExhibInfo(exhibitorId),
  });

  return { isLoading, data, error };
}
