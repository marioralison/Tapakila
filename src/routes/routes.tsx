import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "@/pages/login/login";
import SignIn from "@/pages/signIn/signIn";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/signIn" element={<SignIn />}/>
            </Routes>
        </BrowserRouter>
    )
}