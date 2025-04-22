import Link from "next/link";
import { CiLogin, CiLogout, CiUser } from "react-icons/ci";

export default function HeaderAuthenticaton() {
    return (
        <div className="relative flex items-center group">
            {/* Trường hợp đã đăng nhập: Avatar và tên user */}
            {/* <Link
                href="#"
                className="flex items-center gap-2 text-gray-900 hover:text-[#C19A6B] transition-colors duration-300 ease-in-out"
            >
                <span className="text-base">Jisoo Kim</span>
                <img
                    src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/3/19/1025162/-12-04.jpg"
                    alt=""
                    className="w-8 h-8 rounded-full bg-gray-200 border border-[#C19A6B] object-cover object-center"
                />
            </Link> */}

            {/* Dropdown cho trường hợp đã đăng nhập */}
            {/* <div className="absolute top-10 right-0 w-40 bg-white shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-10">
                <Link
                    href="#"
                    className="block flex items-center justify-between px-4 py-2 text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                >
                    Trang cá nhân
                    <CiUser />
                </Link>
                <Link
                    href="#"
                    className="block flex items-center justify-between px-4 py-2 text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                >
                    Đăng xuất
                    <CiLogout />
                </Link>
            </div> */}

            {/* Trường hợp chưa đăng nhập (comment để minh họa) */}
            <div className="relative flex items-center group">
                <Link
                    href="#"
                    className="flex items-center text-xl text-gray-900 hover:text-[#C19A6B] transition-colors duration-300 ease-in-out"
                >
                    Đăng nhập
                    <CiUser className="ml-2"/>
                </Link>
                <div className="absolute top-8 right-0 w-36 bg-white shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-10">
                    <Link
                        href="#"
                        className="block flex items-center justify-between px-4 py-2 text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                    >
                        Đăng nhập
                        <CiLogin />
                    </Link>
                    <Link   
                        href="#"
                        className="block flex items-center justify-between px-4 py-2 text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                    >
                        Đăng ký
                        <CiLogin />
                    </Link>
                </div>
            </div>
        </div>
    );
}