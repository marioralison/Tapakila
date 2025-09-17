import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "@/pages/auth/login/login";
import SignIn from "@/pages/auth/signIn/signIn";
import Layout from "@/layouts/layouts";
import EventMain from "@/pages/eventMain/eventMain";
import Tickets from "@/pages/ticketList/ticketsList";
import UserProfil from "@/pages/userProfil/userProfil";
import OrganizerForm from "@/pages/organizerForm/organizerForm";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/layout" element={<Layout />}>
          <Route index element={<EventMain />} />
          <Route path="ticket" element={<Tickets />} />
          <Route path="profil" element={<UserProfil />} />
          <Route path="organizerForm" element={<OrganizerForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
