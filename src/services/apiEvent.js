import { BASE_URL } from "../utils/constants";

export async function getEvent(eventId) {
  try {
    const res = await fetch(`${BASE_URL}/events/event/${eventId}`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
