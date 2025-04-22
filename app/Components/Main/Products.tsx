import Link from "next/link";
import BoxProduct from "../BoxProduct";

export default function NewProduct() {
    return (
        <section className="pb-20 bg-secondary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-gray-600 max-w-2xl mx-auto uppercase text-lg">
                        KHÁM PHÁ NHỮNG SẢN PHẨM MỚI NHẤT CỦA CHÚNG TÔI
                    </p>
                </div>

                <BoxProduct />

                <div className="text-center mt-12">
                    <Link href="" className="cursor-pointer bg-[#C19A6B] text-white px-10 py-4 hover:opacity-90 transition tracking-wider font-medium uppercase">
                        Xem tất cả
                    </Link>
                </div>
            </div>
        </section>
    )
}