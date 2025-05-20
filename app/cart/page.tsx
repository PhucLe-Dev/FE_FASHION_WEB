export default function Cart() {
    return (
        <div>
            <section className="pt-30 pb-20">
                <div className="container mx-auto px-6">
                    <h1 className="text-2xl font-playfair font-bold mb-8 text-[#c19a6b]">Giỏ hàng của bạn</h1>

                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="lg:w-2/3">
                            <div className="border border-gray-200 bg-white overflow-hidden">
                                <div className="bg-secondary px-6 py-4 border-b border-gray-200 hidden md:grid grid-cols-12 gap-4">
                                    <div className="col-span-5 font-medium">Sản phẩm</div>
                                    <div className="col-span-2 font-medium text-center">Giá</div>
                                    <div className="col-span-2 font-medium text-center">Số lượng</div>
                                    <div className="col-span-2 font-medium text-center">Số tiền</div>
                                    <div className="col-span-1"></div>
                                </div>

                                <div
                                    className="cart-item px-6 py-4 border-b border-gray-200 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                                    <div className="col-span-5 flex items-center">
                                        <div className="w-24 h-24 rounded overflow-hidden mr-4">
                                            <img src="https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1026&amp;q=80"
                                                alt="Silk Evening Gown" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium">Silk Evening Gown</h3>
                                            <p className="text-gray-500 text-sm">Valentino</p>
                                            <p className="text-gray-500 text-sm">Color: Black | Size: M</p>
                                        </div>
                                    </div>
                                    <div className="col-span-2 text-center">
                                        <span className="text-primary">$2,450</span>
                                        <span className="text-gray-400 line-through ml-1">$2,950</span>
                                    </div>
                                    <div className="col-span-2 flex justify-center">
                                        <div className="flex items-center">
                                            <button className="cursor-pointer border border-gray-200 w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition">
                                                +
                                            </button>
                                            <span className="border border-gray-200 w-10 h-10 flex">
                                                <span className="m-auto">1</span>
                                            </span>
                                            <button className="cursor-pointer border border-gray-200 w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition">
                                                -
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-span-2 text-center font-medium">
                                        $2,450
                                    </div>
                                    <div className="col-span-1 flex justify-end">
                                        <button className="text-gray-400 hover:text-primary transition">
                                            <i className="far fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between mt-6">
                                <button className="text-primary hover:text-accent transition flex items-center">
                                    <i className="fas fa-arrow-left mr-2"></i>
                                    Continue Shopping
                                </button>
                                <button className="text-primary hover:text-accent transition">
                                    Update Cart
                                </button>
                            </div>
                        </div>

                        <div className="lg:w-1/3">
                            <div className="border border-gray-200 bg-white p-6">
                                <h3 className="text-xl font-playfair font-bold mb-6">Tóm tắt đơn hàng</h3>

                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Subtotal</span>
                                        <span className="font-medium">$6,250</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Shipping</span>
                                        <span className="font-medium">Free</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Tax</span>
                                        <span className="font-medium">$500</span>
                                    </div>
                                    <div className="flex justify-between border-t border-gray-200 pt-4">
                                        <span className="text-lg font-bold">Total</span>
                                        <span className="text-xl font-bold">$6,750</span>
                                    </div>
                                </div>

                                <button
                                    className="w-full bg-accent text-white py-3 hover:bg-opacity-90 transition uppercase font-medium tracking-wider mb-4">
                                    Proceed to Checkout
                                </button>

                                <div className="text-center text-sm text-gray-500">
                                    <p>or</p>
                                    <button className="text-primary hover:text-accent transition mt-2">
                                        Check out with PayPal
                                    </button>
                                </div>
                            </div>

                            <div className="border border-gray-200  p-6 mt-6">
                                <h4 className="font-bold mb-4">Have a Promo Code?</h4>
                                <div className="flex">
                                    <input type="text" placeholder="Enter code"
                                        className="flex-grow border border-gray-200 px-4 py-2 rounded-l focus:outline-none focus:ring-1 focus:ring-accent" />
                                    <button className="bg-gray-200 text-primary px-4 py-2 rounded-r hover:bg-gray-300 transition">
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-secondary">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-playfair font-bold text-primary mb-4">
                            <span className="title-decoration">Recently Viewed</span>
                        </h2>
                        <p className="text-gray-600 uppercase tracking-wider text-sm">YOU MIGHT ALSO LIKE</p>
                    </div>

                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
                        <div className="group relative bg-white p-4 ">
                            <div className="relative overflow-hidden rounded-sm mb-4">
                                <img src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1587&amp;q=80"
                                    alt="Velvet Evening Gown"
                                    className="w-full h-80 object-cover group-hover:opacity-90 transition" />
                                <div
                                    className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 flex items-center justify-center">
                                    <button
                                        className="bg-white text-primary px-8 py-3 opacity-0 group-hover:opacity-100 transition duration-300 transform translate-y-4 group-hover:translate-y-0 font-medium tracking-wider">ADD
                                        TO BAG</button>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-primary">Velvet Evening Gown</h3>
                                <p className="text-gray-600 text-sm mb-1">Dior</p>
                                <p className="text-primary font-medium">$2,750</p>
                            </div>
                        </div>
                        <div className="group relative bg-white p-4 ">
                            <div className="relative overflow-hidden rounded-sm mb-4">
                                <img src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1587&amp;q=80"
                                    alt="Velvet Evening Gown"
                                    className="w-full h-80 object-cover group-hover:opacity-90 transition" />
                                <div
                                    className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 flex items-center justify-center">
                                    <button
                                        className="bg-white text-primary px-8 py-3 opacity-0 group-hover:opacity-100 transition duration-300 transform translate-y-4 group-hover:translate-y-0 font-medium tracking-wider">ADD
                                        TO BAG</button>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-primary">Velvet Evening Gown</h3>
                                <p className="text-gray-600 text-sm mb-1">Dior</p>
                                <p className="text-primary font-medium">$2,750</p>
                            </div>
                        </div>
                        <div className="group relative bg-white p-4 ">
                            <div className="relative overflow-hidden rounded-sm mb-4">
                                <img src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1587&amp;q=80"
                                    alt="Velvet Evening Gown"
                                    className="w-full h-80 object-cover group-hover:opacity-90 transition" />
                                <div
                                    className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 flex items-center justify-center">
                                    <button
                                        className="bg-white text-primary px-8 py-3 opacity-0 group-hover:opacity-100 transition duration-300 transform translate-y-4 group-hover:translate-y-0 font-medium tracking-wider">ADD
                                        TO BAG</button>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-primary">Velvet Evening Gown</h3>
                                <p className="text-gray-600 text-sm mb-1">Dior</p>
                                <p className="text-primary font-medium">$2,750</p>
                            </div>
                        </div>
                        <div className="group relative bg-white p-4 ">
                            <div className="relative overflow-hidden rounded-sm mb-4">
                                <img src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1587&amp;q=80"
                                    alt="Velvet Evening Gown"
                                    className="w-full h-80 object-cover group-hover:opacity-90 transition" />
                                <div
                                    className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 flex items-center justify-center">
                                    <button
                                        className="bg-white text-primary px-8 py-3 opacity-0 group-hover:opacity-100 transition duration-300 transform translate-y-4 group-hover:translate-y-0 font-medium tracking-wider">ADD
                                        TO BAG</button>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-primary">Velvet Evening Gown</h3>
                                <p className="text-gray-600 text-sm mb-1">Dior</p>
                                <p className="text-primary font-medium">$2,750</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}