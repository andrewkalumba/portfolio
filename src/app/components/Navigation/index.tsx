import Link from "next/link"

interface NavItemsProp {
    name: string
    href: string

}

const Navigation = () => {
    const NavItems: NavItemsProp[] = [
        { name: "Home", href: "/" },
        { name: "Contact", href: "/form" }
    ]

    return (
        <div className="bg-[#EDE7B1]">
        <div className="flex flex-row justify-center gap-[16px] bg-[#006E90] p-[18px] text-amber-50 font-bold text-2xl">
            {NavItems.map((item: NavItemsProp, index: number) => <Link href={item.href} key={index}> {item.name} </Link>)}
        </div>
        </div>
    )
}

export default Navigation