import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";

export default function Layout () {
    return (
        <>
            <Nav />
            <Header />
            <Outlet />
        </>
    )
}