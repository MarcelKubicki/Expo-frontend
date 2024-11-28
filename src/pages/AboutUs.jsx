import Banner from "../components/Banner";
import PageNav from "../components/PageNav";

function AboutUs() {
  return (
    <main>
      <PageNav />
      <Banner>
        <h1 style={{ color: "white" }}>Expo</h1>
        <p style={{ color: "white" }}>Jesteśmy tacy o!</p>
      </Banner>
      <h2>Wszystko jest dobrze, chłopaki dobrze robią</h2>
    </main>
  );
}

export default AboutUs;
