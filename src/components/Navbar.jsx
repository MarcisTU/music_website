import {cn} from '@/lib/utils';
import {useEffect, useState} from "react";
import {Menu, X} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";


const navItems = [
    {name: "Home", href: "/"},
    {name: "About", href: "/about"},
    {name: "Projects", href: "/projects"},
    {name: "Contact", href: "/contact"},
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return <nav className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
    )}>
        <div className="container flex items-center justify-between">
            <Link to="/" className="bg-white/90 p-1.5 rounded-md hover:bg-white transition-colors">
                <img src={logo} alt="MUM Logo" className="h-8 w-auto object-contain" />
            </Link>

            {/* desktop nav */}
            <div className="hidden md:flex space-x-8">
                {navItems.map((item, key) => (
                    <Link key={key} to={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                        {item.name}
                    </Link>
                ))}
            </div>

            {/* mobile nav */}
            <button
                onClick={() => setIsMenuOpened((prev) => !prev)}
                className="md:hidden p-2 text-foreground z-50"
                aria-label={isMenuOpened ? "Close Menu" : "Open Menu"}
            >
                {isMenuOpened ? <X SIZE={24}/> : <Menu size={24}/>}{" "}
            </button>

            <div className={cn(
                "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                "transition-all duration-300 md:hidden",
                isMenuOpened
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
            )}>
                <div className="flex flex-col space-y-6 text-xl">
                    {navItems.map((item, key) => (
                        <Link
                            key={key}
                            to={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            onClick={() => setIsMenuOpened(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </nav>;
};