import Link from "next/link";

export default function Brands() {
    return (
        <section className="pb-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-gray-600 max-w-2xl mx-auto uppercase text-lg">
                        KHÁM PHÁ CÁC THƯƠNG HIỆU CỦA CHÚNG TÔI
                    </p>
                </div>
                <div className="bg-white py-24 sm:py-20">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="flex items-center justify-between">
                            <Link href="" className="">
                                <img src="https://i.pinimg.com/736x/33/01/f7/3301f79719f599d8f3a36a0cd4448f24.jpg" alt="Transistor" width="100" />
                            </Link>
                            <Link href="" className="">
                                <img src="https://i.pinimg.com/736x/62/76/32/6276327ee9ee965cfe426561a9b14ff7.jpg" alt="Transistor" width="100" />
                            </Link>
                            <Link href="" className="">
                                <img src="https://i.pinimg.com/736x/8d/2b/f1/8d2bf1294ab0a9db2c6423e28761431b.jpg" alt="Transistor" width="100" />
                            </Link>
                            <Link href="" className="">
                                <img src="https://i.pinimg.com/736x/62/5a/cc/625acc97d73356a1a561aeeaa77417f5.jpg" alt="Transistor" width="100" />
                            </Link>
                            <Link href="" className="">
                                <img src="https://i.pinimg.com/736x/23/44/a8/2344a8cd1e3c1c3f32e91ad9b55ec51d.jpg" alt="Transistor" width="100" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}