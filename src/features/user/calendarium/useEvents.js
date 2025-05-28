import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { getEvents } from "../../../services/apiCalendarium";

export function useEvents() {
  const [searchParams] = useSearchParams();

  const {
    isLoading,
    data: events,
    error,
  } = useQuery({
    queryKey: ["events", searchParams.toString()],
    queryFn: () => getEvents(searchParams),
    retry: false,
  });

  return { isLoading, error, events };
}
