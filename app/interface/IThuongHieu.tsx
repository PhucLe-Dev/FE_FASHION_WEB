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
    created_at: string; // hoặc Date nếu bạn muốn parse về Date
    updated_at: string; // hoặc Date nếu bạn muốn parse về Date
    slug: string;
  }
  