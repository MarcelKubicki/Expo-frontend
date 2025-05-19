import { Outlet } from "react-router-dom";
import { EventProvider } from "../context/EventProvider";

function EventProviderLayout() {
  return (
    <EventProvider>
      <Outlet />
    </EventProvider>
  );
}

export default EventProviderLayout;
