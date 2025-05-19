import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import EventProviderLayout from "./ui/EventProviderLayout";
import UserLayout from "./ui/UserLayout";
import ScrollToTop from "./ui/ScrollToTop";
import JoinEventModal from "./features/user/event/JoinEventModal/JoinEventModal";
import RequireAuth from "./ui/RequireAuth";

import Calendarium from "./pages/user/Calendarium/Calendarium";
import Login from "./pages/user/Login/Login";
import PageNotFound from "./pages/user/PageNotFound/PageNotFound";
import AboutUs from "./pages/user/AboutUs/AboutUs";
import EventPage from "./pages/user/EventPage/EventPage";
import CatalogPage from "./pages/user/CatalogPage/CatalogPage";
import Register from "./pages/user/Register/Register";
import Unauthorized from "./pages/user/Unauthorized/Unauthorized";
import ProfilePage from "./pages/user/ProfilePage/ProfilePage";
import NotificationsPage from "./pages/user/NotificationsPage/NotificationsPage";

import AdminPage from "./pages/admin/AdminPage/AdminPage";
import CreateEventPage from "./pages/admin/CreateEventPage/CreateEventPage";
import ProfilesVerificationPage from "./pages/admin/ProfilesVerificationPage/ProfilesVerificationPage";
import JoinRequestsPage from "./pages/admin/JoinRequestsPage/JoinRequestsPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* <Route element={<RequireAuth allowedRoles={["admin"]} />}> */}
        <Route path="/adminPanel" element={<AdminPage />}>
          <Route index element={<Navigate to="createEvent" />} />
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

          <Route index element={<Calendarium />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route element={<RequireAuth allowedRoles={["user"]} />}>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
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
