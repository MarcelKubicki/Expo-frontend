import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AboutUs from "./pages/AboutUs";
import EventPage from "./pages/EventPage";
import CatalogPage from "./pages/CatalogPage";
import Register from "./pages/Register";
import JoinEventModal from "./components/JoinEventModal";
import RequireAuth from "./components/RequireAuth";
import Unauthorized from "./components/Unauthorized";
import ProfilePage from "./pages/ProfilePage";
import AdminPage from "./pages/AdminPage";
import EventProviderLayout from "./pages/EventProviderLayout";
import UserLayout from "./pages/UserLayout";
import CreateEventPage from "./pages/CreateEventPage";
import ProfilesVerificationPage from "./pages/ProfilesVerificationPage";
import JoinRequestsPage from "./pages/JoinRequestsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<RequireAuth allowedRoles={["admin"]} />}> */}
        <Route path="/adminPanel" element={<AdminPage />}>
          <Route path="createEvent" element={<CreateEventPage />} />
          <Route
            path="profilesVerification"
            element={<ProfilesVerificationPage />}
          />
          <Route path="joinRequests" element={<JoinRequestsPage />} />
        </Route>
        {/* </Route> */}

        <Route element={<UserLayout />}>
          <Route element={<EventProviderLayout />}>
            <Route path="/event/:eventId" element={<EventPage />}>
              <Route element={<RequireAuth allowedRoles={["user"]} />}>
                <Route path="join" element={<JoinEventModal />} />
              </Route>
            </Route>
          </Route>

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
