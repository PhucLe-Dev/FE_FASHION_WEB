export default interface ILoai {
  _id: string;                // MongoDB ObjectId
  id: number;                 // ID riêng có thể dùng để sắp xếp hoặc hiển thị
  ten_loai: string;           // Tên loại sản phẩm (VD: "Đồ nam")
  mo_ta: string;              // Mô tả
  hinh: string;               // URL hình ảnh đại diện
  thu_tu: number;             // Thứ tự hiển thị
  an_hien: boolean;           // Trạng thái hiển thị (true = hiển thị)
  meta_title: string;         // Thẻ tiêu đề SEO
  meta_description: string;   // Mô tả SEO
  meta_keywords: string;      // Từ khóa SEO
  created_at: string;         // Thời gian tạo (ISO string)
  updated_at: string;         // Thời gian cập nhật (ISO string)
  slug: string;               // Đường dẫn thân thiện (VD: "do-nam")
  __v: number;                // Phiên bản tài liệu (Mongoose mặc định)
}