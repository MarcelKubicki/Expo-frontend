import { BASE_URL } from "../utils/constants";

export async function getExhibitors(searchParams) {
  try {
    const res = await fetch(
      `${BASE_URL}/exhibitors?` + new URLSearchParams(searchParams).toString()
    );

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}
