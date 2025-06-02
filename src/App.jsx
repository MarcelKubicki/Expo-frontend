import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import EventProviderLayout from "./ui/EventProviderLayout";
import UserLayout from "./ui/UserLayout";
import ScrollToTop from "./ui/ScrollToTop";
import RequireAuth from "./ui/RequireAuth";
import Spinner from "./ui/Spinner/Spinner";
import JoinEventModal from "./features/user/event/JoinEventModal/JoinEventModal";
import ExhibitorModal from "./features/user/catalog/ExhibitorModal/ExhibitorModal";

const Calendarium = lazy(() => import("./pages/user/Calendarium/Calendarium"));
const Login = lazy(() => import("./pages/user/Login/Login"));
const PageNotFound = lazy(() =>
  import("./pages/user/PageNotFound/PageNotFound")
);
const AboutUs = lazy(() => import("./pages/user/AboutUs/AboutUs"));
const EventPage = lazy(() => import("./pages/user/EventPage/EventPage"));
const CatalogPage = lazy(() => import("./pages/user/CatalogPage/CatalogPage"));
const Register = lazy(() => import("./pages/user/Register/Register"));
const Unauthorized = lazy(() =>
  import("./pages/user/Unauthorized/Unauthorized")
);
const ProfilePage = lazy(() => import("./pages/user/ProfilePage/ProfilePage"));
const NotificationsPage = lazy(() =>
  import("./pages/user/NotificationsPage/NotificationsPage")
);

const AdminPage = lazy(() => import("./pages/admin/AdminPage/AdminPage"));
const CreateEventPage = lazy(() =>
  import("./pages/admin/CreateEventPage/CreateEventPage")
);
const ProfilesVerificationPage = lazy(() =>
  import("./pages/admin/ProfilesVerificationPage/ProfilesVerificationPage")
);
const JoinRequestsPage = lazy(() =>
  import("./pages/admin/JoinRequestsPage/JoinRequestsPage")
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<Spinner />}>
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
              <Route path="/catalog" element={<CatalogPage />}>
                <Route path=":exhibitorId" element={<ExhibitorModal />} />
              </Route>
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
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
