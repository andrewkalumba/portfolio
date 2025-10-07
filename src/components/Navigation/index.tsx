"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navigation = () => {
    const pathname = usePathname()
    const isActive = pathname === "/"

    return (
        <nav className="bg-[#006E90] shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-center items-center px-6 py-4">
                <Link href="/" className="relative text-amber-50 font-semibold text-lg transition-colors duration-300 hover:text-amber-200" >
                    Home
                    <span className={`absolute bottom-0 left-0 w-0 h-[3px] bg-amber-200 rounded-full transition-all duration-300
${isActive ? "w-full" : "hover:w-full"}`}
                    />
                </Link>
            </div>
        </nav>
    )
}

export default Navigation
