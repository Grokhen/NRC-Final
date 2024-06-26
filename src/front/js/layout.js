import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Registro } from "./pages/registro";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Login } from "./pages/login";
import { User } from "./pages/user";
import { Admin } from "./pages/admin";
import injectContext from "./store/appContext";
import { SobreMi } from "./pages/sobreMi";


import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Contact_form from "./pages/contact_form";
import Messages from "./pages/messages";
import { Ejercicios } from "./pages/ejercicios";
import ProtectedRoute from "./component/utils/protectedRoute";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;



    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<ProtectedRoute allowedRole="user" />}>
                            <Route element={<User />} path="/user" />
                            <Route element={<Ejercicios />} path="/ejercicio" />
                        </Route>
                        <Route element={<ProtectedRoute allowedRole="admin" />}>
                            <Route element={<Admin />} path="/admin" />
                            <Route element={<Messages />} path="/inbox" />
                        </Route>
                        <Route element={<Registro />} path="/registro" />
                        <Route element={<SobreMi />} path="/sobremi" />
                        <Route element={<Contact_form />} path="/contact" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
