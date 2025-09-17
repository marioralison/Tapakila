import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "@/pages/auth/login/login";
import SignIn from "@/pages/auth/signIn/signIn";

import LayoutClient from "@/layouts/layoutsClient";
import LayoutOrganizer from "@/layouts/layoutsOrganizer";

import EventMain from "@/pages/client/eventMain/eventMain";
import Tickets from "@/pages/client/ticketList/ticketsList";
import UserProfilClient from "@/pages/client/userProfil/userProfil";
import OrganizerForm from "@/pages/client/organizerForm/organizerForm";

import EventManagement from "@/pages/organizer/eventManagement/eventManagement";
import Reservation from "@/pages/organizer/reservation/reservations";
import UserProfilOrganizer from "@/pages/organizer/userProfil/userProfil";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/layoutClient" element={<LayoutClient />}>
          <Route index element={<EventMain />} />
          <Route path="ticket" element={<Tickets />} />
          <Route path="profil" element={<UserProfilClient />} />
          <Route path="organizerForm" element={<OrganizerForm />} />
        </Route>
        <Route path="/layoutOrganizer" element={<LayoutOrganizer />}>
          <Route index element={<EventManagement />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="profil" element={<UserProfilOrganizer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
