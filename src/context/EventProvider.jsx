import { createContext, useContext, useState } from "react";

const EventContext = createContext({});

function EventProvider({ children }) {
  const [activeStands, setActiveStands] = useState([]);
  const [isTakingPart, setIsTakingPart] = useState(false);

  return (
    <EventContext.Provider
      value={{ activeStands, setActiveStands, isTakingPart, setIsTakingPart }}
    >
      {children}
    </EventContext.Provider>
  );
}

function useEvent() {
  return useContext(EventContext);
}

export { EventProvider, useEvent };
