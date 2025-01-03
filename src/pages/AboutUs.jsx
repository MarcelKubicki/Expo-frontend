import Banner from "../components/Banner";
import useRefreshToken from "../hooks/useRefreshToken";

function AboutUs() {
  const refresh = useRefreshToken();
  return (
    <main>
      <Banner>
        <h1 style={{ color: "white" }}>Expo</h1>
        <p style={{ color: "white" }}>Jesteśmy tacy o!</p>
      </Banner>
      <h2>Wszystko jest dobrze, chłopaki dobrze robią</h2>
      <button onClick={() => refresh()}>refresh</button>
    </main>
  );
}

export default AboutUs;
