import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { getEvent } from "../../../services/apiEvent";

export function useEventInfo() {
  const { eventId } = useParams();

  const { isLoading, data, error } = useQuery({
    queryKey: ["event", eventId],
    queryFn: () => getEvent(eventId),
  });

  return { isLoading, error, data };
}
