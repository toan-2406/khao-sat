export default function Step1Classification({ data, set, errors }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div className="fg">
        <label className="fl">Loại hình kinh doanh *</label>
        <div className="radio-group">
          {["Khách sạn", "Homestay", "Resort", "Nhà hàng", "Spa / Wellness", "Khu công nghiệp", "Khác"].map(v => (
            <div 
              key={v} 
              className={`radio-btn ${data.clientType === v ? "active" : ""}`} 
              onClick={() => set("clientType", v)}
            >
              {v}
            </div>
          ))}
        </div>
        {errors.clientType && <div className="em">⚠ {errors.clientType}</div>}
      </div>
      <div className="fg">
        <label className="fl">Tên cơ sở / Thương hiệu *</label>
        <input 
          className={`fi ${errors.businessName ? "err" : ""}`} 
          placeholder="VD: Homestay Hướng Dương" 
          value={data.businessName} 
          onChange={e => set("businessName", e.target.value)} 
        />
        {errors.businessName && <div className="em">⚠ {errors.businessName}</div>}
      </div>
      <div className="fg">
        <label className="fl">Địa chỉ cơ sở</label>
        <input 
          className="fi" 
          placeholder="Phường/Xã, Quận/Huyện, Tỉnh/Thành" 
          value={data.address} 
          onChange={e => set("address", e.target.value)} 
        />
      </div>
      <div className="fg">
        <label className="fl">Số phòng / Quy mô</label>
        <select 
          className="fi" 
          value={data.roomCount} 
          onChange={e => set("roomCount", e.target.value)}
        >
          <option value="">-- Chọn quy mô --</option>
          {[
            "Dưới 10 phòng (Nhỏ)", 
            "10 – 30 phòng (Vừa)", 
            "30 – 60 phòng (Trung bình)", 
            "60 – 100 phòng (Lớn)", 
            "Trên 100 phòng (Chuỗi / Resort)", 
            "Không áp dụng (Nhà máy / KCN)"
          ].map(o => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
