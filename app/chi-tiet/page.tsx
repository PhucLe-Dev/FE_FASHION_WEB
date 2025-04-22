"use client";
import Link from "next/link";
import RelatedProduct from "./RelatedProduct";
import { CiDeliveryTruck, CiShoppingCart } from "react-icons/ci";
import { useState } from "react";
import Comment from "./Comment";

export default function Detail() {
  // State để quản lý tab đang active
  const [activeTab, setActiveTab] = useState<"description" | "details">("details");

  // State để quản lý URL ảnh lớn
  const [mainImage, setMainImage] = useState<string>(
    "https://assets.christiandior.com/is/image/diorprod/547P85A3332X1700_E01?$default_GHC$&crop=683,150,635,1471&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85"
  );

  // State để quản lý danh sách các ảnh thumbnail
  const [thumbnailImage, setThumbnailImage] = useState<string[]>([
    "https://assets.christiandior.com/is/image/diorprod/547P85A3332X1700_E08?$default_GHC$&crop=641,150,719,1470&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85",
  ]);

  // State để quản lý màu sắc và kích cỡ được chọn
  const [selectedColor, setSelectedColor] = useState<string>("black");
  const [selectedSize, setSelectedSize] = useState<string>("xs");

  // Hàm xử lý khi click vào tab
  const handleTabClick = (tab: "description" | "details") => {
    setActiveTab(tab);
  };

  // Hàm xử lý khi click vào thumbnail
  const handleThumbnailClick = (clickedThumbnail: string, index: number) => {
    const currentMainImage = mainImage;
    setMainImage(clickedThumbnail);
    setThumbnailImage((prevThumbnails) =>
      prevThumbnails.map((thumb, i) => (i === index ? currentMainImage : thumb))
    );
  };

  // Hàm xử lý khi thay đổi màu sắc
  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  // Hàm xử lý khi thay đổi kích cỡ
  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  // Hàm xử lý cuộn đến phần Comment
  const scrollToComment = () => {
    const commentSection = document.getElementById("comment-section");
    if (commentSection) {
      commentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="sticky top-32">
                <div className="mb-4 overflow-hidden">
                  <img
                    id="main-image"
                    src={mainImage}
                    alt="Silk Evening Gown"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {thumbnailImage.map((thumbnail, index) => (
                    <div key={index} className="product-thumbnail cursor-pointer">
                      <img
                        src={thumbnail}
                        alt={`Silk Evening Gown Thumbnail ${index + 1}`}
                        className={`w-50 h-40 object-cover border ${
                          mainImage === thumbnail ? "border-accent border-2" : "border-gray-200"
                        }`}
                        onClick={() => handleThumbnailClick(thumbnail, index)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h1 className="text-3xl md:text-3xl font-bold text-primary mb-2">
                Mid-Length Asymmetric Dress
              </h1>
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600">Dior</p>
                <Link
                  href="#comment-section"
                  onClick={scrollToComment}
                  className="text-sm text-accent hover:underline"
                >
                  Đọc đánh giá
                </Link>
              </div>

              <div className="mb-6">
                <span className="text-2xl font-bold text-primary">$2,450</span>
                <span className="ml-2 text-gray-400 line-through">$2,950</span>
              </div>

              <p className="text-gray-700 mb-8 line-clamp-2">
                Unveiled at the Spring-Summer 2025 Ready-to-Wear Fashion Show...
              </p>

              <div className="mb-8">
                <h3 className="text-lg font-medium text-primary mb-3">
                  Màu sắc: <span id="selected-color">{selectedColor}</span>
                </h3>
                <div className="flex space-x-3">
                  <div className="color-selector">
                    <input
                      type="radio"
                      id="color-black"
                      name="color"
                      value="black"
                      className="hidden"
                      checked={selectedColor === "black"}
                      onChange={() => handleColorChange("black")}
                    />
                    <label className="block w-10 h-10 bg-black rounded-full cursor-pointer border-2 border-gray-200 hover:border-gray-300 transition"></label>
                  </div>
                  <div className="color-selector">
                    <input
                      type="radio"
                      id="color-white"
                      name="color"
                      value="white"
                      className="hidden"
                      checked={selectedColor === "white"}
                      onChange={() => handleColorChange("white")}
                    />
                    <label className="block w-10 h-10 bg-white rounded-full cursor-pointer border-2 border-gray-200 hover:border-gray-300 transition"></label>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-medium text-primary">Kích cỡ</h3>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  <div className="size-selector">
                    <input
                      type="radio"
                      id="size-xs"
                      name="size"
                      value="xs"
                      className="hidden"
                      checked={selectedSize === "xs"}
                      onChange={() => handleSizeChange("xs")}
                    />
                    <label className="block w-full py-2 text-center border border-gray-200 cursor-pointer hover:border-gray-300 transition">
                      XS
                    </label>
                  </div>
                  <div className="size-selector">
                    <input
                      type="radio"
                      id="size-s"
                      name="size"
                      value="s"
                      className="hidden"
                      checked={selectedSize === "s"}
                      onChange={() => handleSizeChange("s")}
                    />
                    <label className="block w-full py-2 text-center border border-gray-200 cursor-pointer hover:border-gray-300 transition">
                      S
                    </label>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium text-primary mb-3">Số lượng</h3>
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

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="flex items-center cursor-pointer border-2 border-[#C19A6B] px-8 py-4 hover:bg-[#C19A6B] hover:text-white transition tracking-wider font-medium uppercase flex-1">
                  <CiShoppingCart className="mr-2 text-xl" /> Thêm vào giỏ hàng
                </button>
                <button className="cursor-pointer bg-[#C19A6B] text-primary px-8 py-4 text-white transition tracking-wider font-medium uppercase flex-1">
                  <i className="far fa-heart mr-2"></i> Mua ngay
                </button>
              </div>

              <div className="border-t border-b border-gray-200 py-4 mb-8">
                <div className="flex items-start mb-3">
                  <CiDeliveryTruck className="text-gray-500 mt-1 mr-3 text-xl" />
                  <div>
                    <h4 className="flex items-center font-medium text-primary">
                      Miễn phí giao hàng & trả hàng
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Miễn phí vận chuyển cho tất cả các đơn hàng...
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex justify-between border-b border-gray-200">
                  <button
                    className={`px-4 py-3 font-medium text-primary ${
                      activeTab === "description" ? "border-b-2 border-primary" : ""
                    }`}
                    onClick={() => handleTabClick("description")}
                  >
                    Mô tả sản phẩm
                  </button>
                  <button
                    className={`px-4 py-3 font-medium text-primary ${
                      activeTab === "details" ? "border-b-2 border-primary" : ""
                    }`}
                    onClick={() => handleTabClick("details")}
                  >
                    Thông tin chi tiết
                  </button>
                </div>

                {activeTab === "description" && (
                  <div id="description" className="py-6">
                    Unveiled at the Spring-Summer 2025 Ready-to-Wear Fashion Show, the mid-length asymmetric dress borrows elegant codes from the House archive Abandon dress in a new take on Dior signature silhouette. Crafted in black silk and cotton faille, it features an asymmetric, shoulder-baring neckline, elevated by a double-breasted closure, notched collar, cap sleeves and a black leather belt highlighting the waist. True to the spirit of the show, the asymmetric dress can be paired with black boots for an unmistakable Dior look.
                  </div>
                )}

                {activeTab === "details" && (
                  <div id="details" className="py-6">
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex">
                        <span className="font-medium w-32">Material</span>
                        <span>100% Silk Charmeuse</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium w-32">Lining</span>
                        <span>100% Silk</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium w-32">Care</span>
                        <span>Dry clean only</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium w-32">Made in</span>
                        <span>Italy</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium w-32">Length</span>
                        <span>Floor-length</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium w-32">Closure</span>
                        <span>Hidden back zipper</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="comment-section">
        <Comment />
      </div>
      <RelatedProduct />
    </div>
  );
}