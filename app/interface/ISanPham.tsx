export interface IVariant {
  _id: string;
  sku: string;
  kich_thuoc: string;
  mau_sac: string;
  gia: number;
  gia_km: number;
  phan_tram_km: number;
  so_luong: number;
  so_luong_da_ban: number;
  hinh_chinh: string;
  hinh_thumbnail: string[];
}

export interface ILoai {
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

export interface IThuongHieu {
  _id: string;
  id: number;
  ten_thuong_hieu: string;
  mo_ta: string;
  hinh: string;
  an_hien: boolean;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  created_at: string;
  updated_at: string;
  slug: string;
}


export interface IProduct {
  _id: string;
  ten_sp: string;
  slug: string;
  id_loai: number;
  id_thuong_hieu: number;
  mo_ta: string;
  chat_lieu: string;
  xuat_xu: string;
  variants: IVariant[];
  hot: boolean;
  an_hien: boolean;
  luot_xem: number;
  tags: string[];
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  created_at: string;
  updated_at: string;
  __v: number;
  thuong_hieu: IThuongHieu;
  loai_san_pham: ILoai;
}