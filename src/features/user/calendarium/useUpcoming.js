import { useQuery } from "@tanstack/react-query";
import { getUpcoming } from "../../../services/apiCalendarium";

export function useUpcoming() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["upcoming"],
    queryFn: getUpcoming,
  });
  return { isLoading, data, error };
}
