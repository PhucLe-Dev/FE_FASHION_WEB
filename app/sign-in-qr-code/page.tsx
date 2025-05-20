import Link from "next/link";
import { BsQrCodeScan } from "react-icons/bs";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

export default function SigninQRCode() {
    return (
        <section className="pt-35 pb-20 bg-[#c19a6b]">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="overflow-hidden">
                    <div className="grid md:grid-cols-2">
                        <div className="hidden md:block bg-auth relative">
                            <div className="absolute inset-0 flex items-center justify-center p-10">
                                <div className="text-white text-center">
                                    <h3 className="text-6xl font-playfair font-bold mb-4">LUXE</h3>
                                    <p className="mb-6">&quot;Được tạo nên từ sự tinh tế,
                                        dành cho những tâm hồn thanh lịch.&quot;</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-10 bg-white">
                            <div className="flex justify-between items-center">
                                <h2 className="text-3xl font-playfair font-bold mb-2">Đăng nhập với mã QR</h2>
                                <div className="bg-[#f1cfa4e5] relative inline-flex items-center px-6 py-2 border-2 border-[#c19a6b] after:content-[''] after:absolute after:top-1/2 after:right-[-2] after:w-4 after:h-4 after:border-t-2 after:border-r-2 after:border-[#c19a6b] after:translate-x-1/2 after:-translate-y-1/2 after:rotate-45 after:bg-white">
                                    <span className="">Đăng nhập với mật khẩu</span>
                                </div>
                                <Link href="/sign-in">
                                    <HiOutlineComputerDesktop className="text-6xl text-[#c19a6b] cursor-pointer ml-3" />
                                </Link>
                            </div>
                            <div className="flex flex-col items-center justify-center mt-5">
                                <BsQrCodeScan className="text-[200px] text-[#c19a6b]" />
                                <div className="text-xl mt-5">Quét mã QR bằng ứng dụng LUXE</div>
                                <Link href="" className="mt-5 text-[#c19a6b] hover:underline">Làm thế nào để quét mã QR</Link>
                                <p className="text-center text-gray-500 mt-5">
                                    Bạn mới biết đến LUXE? <Link href="/register" className="text-[#c19a6b] hover:underline">Tạo tài khoản mới</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
