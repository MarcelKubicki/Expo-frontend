import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EventProvider } from "./context/EventProvider";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AboutUs from "./pages/AboutUs";
import EventPage from "./pages/EventPage";
import CatalogPage from "./pages/CatalogPage";
import Register from "./pages/Register";
import PageNav from "./components/PageNav";
import JoinEventModal from "./components/JoinEventModal";
import RequireAuth from "./components/RequireAuth";
import Unauthorized from "./components/Unauthorized";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <PageNav />

      <EventProvider>
        <Routes>
          <Route path="/event/:eventId" element={<EventPage />}>
            <Route element={<RequireAuth allowedRoles={["user"]} />}>
              <Route path="join" element={<JoinEventModal />} />
            </Route>
          </Route>
        </Routes>
      </EventProvider>

      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route element={<RequireAuth allowedRoles={["user"]} />}>
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
