import Link from "next/link";

export default function HeaderLogo() {
    return (
        <Link href='/' className="text-2xl font-bold font-playfair flex items-center">
            <span className="title-decoration text-[#C19A6B]">LUXE</span>
        </Link>
    )
}