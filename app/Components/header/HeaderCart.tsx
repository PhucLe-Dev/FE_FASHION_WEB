import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";

export default function HeaderCart() {

  return (
    <div className="relative flex items-center group">
      {/* Biểu tượng giỏ hàng */}
      <Link
        href="#"
        className="flex items-center text-2xl text-gray-900 hover:text-[#C19A6B] transition-colors duration-300 ease-in-out"
      >
        <CiShoppingCart />
      </Link>

      {/* Dropdown khi có sản phẩm trong giỏ hàng */}
      <div className="absolute top-8 right-0 w-80 bg-white shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-10">
        <div className="p-4">
          <h3 className="text-gray-900 font-medium mb-2">Giỏ hàng</h3>
          {/* Danh sách sản phẩm với cuộn */}
          <div className="max-h-56 overflow-y-auto">
            {/* Sản phẩm mẫu */}
            <div className="flex items-center gap-3 py-2 border-b">
              <div className="w-12 h-12 bg-gray-100">
                <img src="https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80" alt="" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900 line-clamp-2">
                  Áo sơ mi trắng tinh lung linh nhất văn phòng luôn nè mọi người ơi húhus
                </p>
                <p className="text-xs text-gray-600">1 x 22.990.000đ</p>
              </div>
              <button className="cursor-pointer text-gray-600 hover:text-red-500">X</button>
            </div>
            <div className="flex items-center gap-3 py-2 border-b">
              <div className="w-12 h-12 bg-gray-100">
                <img src="https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80" alt="" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900 line-clamp-2">
                  Áo sơ mi trắng tinh lung linh nhất văn phòng luôn nè mọi người ơi húhus
                </p>
                <p className="text-xs text-gray-600">1 x 22.990.000đ</p>
              </div>
              <button className="cursor-pointer text-gray-600 hover:text-red-500">X</button>
            </div>
            <div className="flex items-center gap-3 py-2 border-b">
              <div className="w-12 h-12 bg-gray-100">
                <img src="https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80" alt="" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900 line-clamp-2">
                  Áo sơ mi trắng tinh lung linh nhất văn phòng luôn nè mọi người ơi húhus
                </p>
                <p className="text-xs text-gray-600">1 x 22.990.000đ</p>
              </div>
              <button className="cursor-pointer text-gray-600 hover:text-red-500">X</button>
            </div>
            <div className="flex items-center gap-3 py-2 border-b">
              <div className="w-12 h-12 bg-gray-100">
                <img src="https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80" alt="" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900 line-clamp-2">
                  Áo sơ mi trắng tinh lung linh nhất văn phòng luôn nè mọi người ơi húhus
                </p>
                <p className="text-xs text-gray-600">1 x 22.990.000đ</p>
              </div>
              <button className="cursor-pointer text-gray-600 hover:text-red-500">X</button>
            </div>
            <div className="flex items-center gap-3 py-2 border-b">
              <div className="w-12 h-12 bg-gray-100">
                <img src="https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80" alt="" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900 line-clamp-2">
                  Quần âu lịch lãm dành cho những thanh niên thích làm màu nhất văn phòng
                </p>
                <p className="text-xs text-gray-600">1 x 8.490.000đ</p>
              </div>
              <button className="cursor-pointer text-gray-600 hover:text-red-500">X</button>
            </div>
          </div>
          {/* Phần tổng tiền và nút cố định */}
          <div className="sticky bottom-0 bg-white pt-3 mt-3">
            <p className="text-sm text-gray-900">
              Tổng: <span className="font-medium">31.480.000đ</span>
            </p>
            <Link
              href="#"
              className="block mt-2 px-4 py-2 bg-[#C19A6B] text-white text-center hover:bg-[#a38156] transition-colors duration-200"
            >
              Xem giỏ hàng
            </Link>
          </div>
        </div>
      </div>

      {/* Dropdown khi giỏ hàng rỗng */}
      {/* <div className="absolute top-8 right-0 w-72 bg-white shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-10">
        <div className="p-4 text-center">
            <div>
                <img src="/empty_cart.png" alt="" />
            </div>
          <p className="text-gray-900">Giỏ hàng của bạn đang rỗng</p>
        </div>
      </div> */}
    </div>
  );
}