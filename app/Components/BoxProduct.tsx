import Link from "next/link"
import { IProduct } from "../interface/ISanPham"
export default function BoxProduct({ listProduct }: { listProduct: IProduct[] }) {
    return (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {listProduct.map((item) =>
                <Link href={`/detail-product/${item.variants[0]?.sku}`} key={item._id} className="product-card bg-white group relative">
                    <div className="relative overflow-hidden">
                        <img src={item.variants[0]?.hinh_chinh}
                            alt="Product" className="w-full h-70 object-cover object-center"/>
                        <div
                            className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 flex items-center justify-center">
                            <button
                                className="cursor-pointer bg-white text-xs px-6 py-4 opacity-0 group-hover:opacity-90 transition duration-300 transform translate-y-4 group-hover:translate-y-0 hover:bg-[#C19A6B] hover:text-white font-medium tracking-wider">CHI TIẾT
                            </button>
                            <button
                                className="cursor-pointer bg-white text-xs px-6 py-4 opacity-0 group-hover:opacity-90 transition duration-300 transform translate-y-4 group-hover:translate-y-0 hover:bg-[#C19A6B] hover:text-white font-medium tracking-wider">THÊM VÀO GIỎ HÀNG
                            </button>
                        </div>
                        {item.variants[0]?.phan_tram_km > 0 && (<div className="absolute top-0 left-0 bg-[#C19A6B] text-white px-4 py-2 text-xs font-semibold uppercase tracking-wider">sale {item.variants[0]?.phan_tram_km}%</div>)}
                    </div>
                    <div className="p-4">
                        <div className="items-start">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-medium text-primary line-clamp-1 w-[155px]">{item.ten_sp}</h3>
                                <p className="text-gray-600">{item.thuong_hieu.ten_thuong_hieu}</p>
                            </div>
                            <div className="flex items-center">
                                {item.variants[0]?.gia_km > 0 ? (
                                    <p className="text-primary font-medium mr-2">
                                        {item.variants[0].gia_km.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                    </p>
                                ) : (
                                    <p className="text-primary font-medium">
                                        {item.variants[0].gia.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                    </p>
                                )}

                                {item.variants[0]?.gia_km > 0 && (
                                    <p className="text-gray-400 text-xs line-through">
                                        {item.variants[0].gia.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </Link>
            )}
        </div>
    )
}