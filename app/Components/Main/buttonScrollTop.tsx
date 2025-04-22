"use client"; // Đã có directive này vì ButtonScrollTop là Client Component

import { CiCircleChevUp } from "react-icons/ci";

// Không cần khai báo props vì chúng ta không truyền onClick nữa
export default function ButtonScrollTop() {
  // Di chuyển logic scrollToHero vào đây
  const scrollToHero = () => {
    const commentSection = document.getElementById("hero-section");
    if (commentSection) {
      commentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center pb-5">
      <CiCircleChevUp
        onClick={scrollToHero} // Sử dụng hàm scrollToHero trực tiếp
        className="transition duration-300 cursor-pointer text-3xl rounded-2xl border-1 border-[#C19A6B] hover:bg-[#C19A6B] hover:text-white"
      />
    </div>
  );
}