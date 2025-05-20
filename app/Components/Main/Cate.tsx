"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import ILoai from "@/app/interface/ILoaiSanPham";

export default function Cate() {
    // Khai báo state để lưu danh sách loại sản phẩm
    const [listCate, setListCate] = useState<ILoai[]>([]);
    // Khai báo state để lưu một sản phẩm nỗi bật
    useEffect(() => {
        // Hàm fetch dữ liệu loại sản phẩm từ API
        const fetchDataLoaiSanPham = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/user/loai-san-pham", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (!response.ok) {
                    throw new Error("API response not ok");
                }
                const data = await response.json();
                setListCate(data.data);
            } catch (error) {
                console.error("Lỗi khi fetch listCate:", error);
            }
        };
        fetchDataLoaiSanPham();
    }, []);

    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-gray-600 max-w-2xl mx-auto uppercase text-lg">
                        KHÁM PHÁ BỘ SƯU TẬP TINH TẾ CỦA CHÚNG TÔI
                    </p>
                </div>

                {/* Grid chứa các box sản phẩm */}
                <div className="max-w mx-auto py-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {/* Các box sản phẩm */}
                        {listCate.map((item) =>
                            <Link href={`/detail-product/${item.slug}`} key={item._id} className="group relative overflow-hidden h-110">
                                <img
                                    src={item.hinh}
                                    alt={item.ten_loai}
                                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-opacity-20 flex items-center justify-center">
                                    <div className="text-center">
                                        <h3 className="text-white text-3xl font-bold mb-4">{item.ten_loai}</h3>
                                        <button className="cursor-pointer bg-[#C19A6B] text-white px-10 py-4 hover:opacity-90 transition tracking-wider font-medium uppercase">
                                            Xem ngay
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            <div className="text-center my-16">
                <p className="text-gray-600 max-w-2xl mx-auto uppercase text-lg">
                    KHÁM PHÁ BỘ SƯU TẬP ĐỨNG ĐẦU CỦA CHÚNG TÔI
                </p>
            </div>

            <div className="container mx-auto px-6 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                {/* Box lớn bên trái */}
                <div className="group relative overflow-hidden h-118">
                    <img
                    src="https://vn.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--LV_x_Murakami_Drop2_New_Women_MM_MAR25_DI3.jpg"
                    alt="Top Nổi Bật"
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-opacity-20 flex items-center justify-center">
                        <div className="text-center">
                            <h3 className="text-white text-2xl font-bold mb-5">TOP NỔI BẬT</h3>
                            <Link href="" className="cursor-pointer bg-[#C19A6B] text-white px-10 py-4 hover:opacity-90 transition tracking-wider font-medium uppercase">
                                Xem ngay
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Cột bên phải chứa 2 box nhỏ xếp dọc */}
                <div className="grid grid-cols-1 gap-8">
                    <div className="group relative overflow-hidden h-55">
                        <img
                            src="https://vn.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--MM_MEN_RTW_NewFormalFW25_FEBRUARY2025_DI3.jpg"
                            alt="Top Bán Chạy"
                            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-opacity-20 flex items-center justify-center">
                            <div className="text-center">
                                <h3 className="text-white text-2xl font-bold mb-5">TOP BÁN CHẠY</h3>
                                <Link href="" className="cursor-pointer bg-[#C19A6B] text-white px-10 py-4 hover:opacity-90 transition tracking-wider font-medium uppercase">
                                    Xem ngay
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="group relative overflow-hidden h-55">
                        <img
                            src="https://vn.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--W_MM_New_ForWomen_CreatorsCampaign_Apr24_DI3.jpg"
                            alt="Top Ưu Đãi"
                            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-opacity-20 flex items-center justify-center">
                            <div className="text-center">
                                <h3 className="text-white text-2xl font-bold mb-5">TOP ƯU ĐÃI</h3>
                                <Link href="" className="cursor-pointer bg-[#C19A6B] text-white px-10 py-4 hover:opacity-90 transition tracking-wider font-medium uppercase">
                                    Xem ngay
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}