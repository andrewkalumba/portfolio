"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemsProp {
    name: string;
    href: string;
}

const Navigation = () => {
    const NavItems: NavItemsProp[] = [
        { name: "Home", href: "/" },
        { name: "Contact", href: "/form" },
    ];

    const pathname = usePathname();

    return (
        <nav className="bg-[#006E90] shadow-md">
            <div className="max-w-7xl mx-auto flex justify-center md:justify-start items-center gap-8 md:gap-12 px-6 py-4">
                {NavItems.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link href={item.href} key={index} className={`relative text-amber-50 font-semibold text-lg transition-all duration-300 hover:text-amber-200 
                          ${isActive ? "after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[3px] after:bg-amber-200 after:rounded-full" : ""}`}>
                            {item.name}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default Navigation;
