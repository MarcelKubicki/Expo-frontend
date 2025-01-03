import { createContext, useContext, useState } from "react";

const EventContext = createContext({});

function EventProvider({ children }) {
  const [activeStands, setActiveStands] = useState([]);

  return (
    <EventContext.Provider value={{ activeStands, setActiveStands }}>
      {children}
    </EventContext.Provider>
  );
}

function useEvent() {
  return useContext(EventContext);
}

export { EventProvider, useEvent };
