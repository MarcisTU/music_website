import { Outlet } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { StarBackground } from "@/components/StarBackground.jsx";
import { Navbar } from "@/components/Navbar.jsx";
import {Footer} from "@/components/Footer.jsx";

export const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Persistent Global Components */}
            <ThemeToggle />
            <StarBackground />
            <Navbar />

            <main className="flex flex-col grow">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};