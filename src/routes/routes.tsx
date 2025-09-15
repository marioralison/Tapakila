import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "@/pages/login/login";
import SignIn from "@/pages/signIn/signIn";
import Layout from "@/layouts/layouts";
import EventMain from "@/pages/eventMain/eventMain";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/layout" element={<Layout />}>
          <Route index element={<EventMain />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
