import Link from "next/link";

export default function Cate() {
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
                        <div className="group relative overflow-hidden h-96">
                            <img
                                src="https://www.louisvuitton.com/images/is/image/lv/M_BC_NewFormalFW25_FEV25_11_DII.jpg?wid=490"
                                alt="Đồ nam"
                                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-opacity-20 flex items-center justify-center">
                                <div className="text-center">
                                    <h3 className="text-white text-3xl font-playfair mb-4">Đồ nam</h3>
                                    <Link href="" className="cursor-pointer bg-[#C19A6B] text-white px-10 py-4 hover:opacity-90 transition tracking-wider font-medium uppercase">
                                        Xem ngay
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden h-96">
                            <img
                                src="thoitrangnu.jfif"
                                alt="Đồ nữ"
                                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-opacity-20 flex items-center justify-center">
                                <div className="text-center">
                                    <h3 className="text-white text-3xl font-playfair mb-4">Đồ nữ</h3>
                                    <Link href="" className="cursor-pointer bg-[#C19A6B] text-white px-10 py-4 hover:opacity-90 transition tracking-wider font-medium uppercase">
                                        Xem ngay
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden h-96">
                            <img
                                src="https://vn.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2025/central/categories/campaign-creators/Women_Shoes_Creators_WW_HP_Category_Push_DII.jpg?wid=490"
                                alt="Giày nữ"
                                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-opacity-20 flex items-center justify-center">
                                <div className="text-center">
                                    <h3 className="text-white text-3xl font-playfair mb-4">Giày nữ</h3>
                                    <Link href="" className="cursor-pointer bg-[#C19A6B] text-white px-10 py-4 hover:opacity-90 transition tracking-wider font-medium uppercase">
                                        Xem ngay
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden h-96">
                            <img
                                src="https://vn.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/brand-content-coremedia/women/2025/collection/lv-style-diary-spring-edition/WOMEN_CREATORS_STILL_11_DII.jpg?wid=490"
                                alt="Túi xách"
                                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-opacity-20 flex items-center justify-center">
                                <div className="text-center">
                                    <h3 className="text-white text-3xl font-playfair mb-4">Túi xách</h3>
                                    <Link href="" className="cursor-pointer bg-[#C19A6B] text-white px-10 py-4 hover:opacity-90 transition tracking-wider font-medium uppercase">
                                        Xem ngay
                                    </Link>
                                </div>
                            </div>
                        </div>
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
                <div className="flex h-106 bg-[url(https://diorama.dam-broadcast.com/cdn-cgi/image/width=1440,format=auto/pm_11872_1027_1027755-5on0hqpae3-whr.jpg)] bg-cover bg-center">
                    <div className="m-auto inset-0 bg-opacity-20 flex items-center justify-center">
                        <div className="text-center">
                            <h3 className="text-white text-2xl font-playfair mb-4">Những sản phẩm nỗi bật nhất cảu chúng tôi</h3>
                            <Link href="" className="cursor-pointer bg-[#C19A6B] text-white px-10 py-4 hover:opacity-90 transition tracking-wider font-medium uppercase">
                                Xem ngay
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Cột bên phải chứa 2 box nhỏ xếp dọc */}
                <div className="grid grid-cols-1 gap-8">
                    <div className="flex h-49 bg-[url(https://diorama.dam-broadcast.com/cdn-cgi/image/width=1440,format=auto/pm_11872_1022_1022607-tn0v4uxxtp-whr.jpg)] bg-cover bg-center">
                        <div className="m-auto inset-0 bg-opacity-20 flex items-center justify-center">
                            <div className="text-center">
                                <h3 className="text-white text-2xl font-playfair mb-4">Những sản phẩm bán chạy nhất cảu chúng tôi</h3>
                                <Link href="" className="cursor-pointer bg-[#C19A6B] text-white px-10 py-4 hover:opacity-90 transition tracking-wider font-medium uppercase">
                                    Xem ngay
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex h-49 bg-[url(https://images.pexels.com/photos/2229490/pexels-photo-2229490.jpeg?auto=compress&cs=tinysrgb&w=600)] bg-cover bg-center">
                        <div className="m-auto inset-0 bg-opacity-20 flex items-center justify-center">
                            <div className="text-center">
                                <h3 className="text-white text-2xl font-playfair mb-4">Những sản phẩm hot nhất cảu chúng tôi</h3>
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