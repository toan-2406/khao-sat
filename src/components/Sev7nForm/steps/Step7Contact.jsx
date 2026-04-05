import RadioGroup from "../ui/RadioGroup";

export default function Step7Contact({ data, set }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div className="fg">
          <label className="fl">Tên người liên hệ</label>
          <input 
            className="fi" 
            placeholder="Nguyễn Văn A" 
            value={data.contactName} 
            onChange={e => set("contactName", e.target.value)} 
          />
        </div>
        <div className="fg">
          <label className="fl">Số điện thoại / Zalo</label>
          <input 
            className="fi" 
            placeholder="09xx xxx xxx" 
            value={data.phone} 
            onChange={e => set("phone", e.target.value)} 
          />
        </div>
      </div>
      <div className="fg">
        <label className="fl">Người ra quyết định hợp đồng</label>
        <RadioGroup field="decisionMaker" opts={["Chính tôi (Chủ)", "Quản lý khách sạn", "Trưởng buồng phòng", "Cần báo cáo thêm"]} data={data} set={set} />
      </div>
      <div className="fg">
        <label className="fl">Dự kiến bắt đầu hợp tác</label>
        <RadioGroup field="startDate" opts={["Ngay lập tức", "Trong 1–2 tuần", "Trong 1 tháng", "Đang cân nhắc"]} data={data} set={set} />
      </div>
      <div className="fg">
        <label className="fl">Muốn giặt thử mẫu miễn phí?</label>
        <RadioGroup field="trialRequest" opts={["Có, muốn thử trước", "Không cần thiết", "Để Sev7n tư vấn"]} data={data} set={set} />
      </div>
      <div className="fg">
        <label className="fl">Biết đến Sev7n qua đâu?</label>
        <RadioGroup 
          field="referralSource" 
          opts={["Giới thiệu từ đối tác", "Facebook / Zalo", "Google", "TikTok", "Sev7n chủ động liên hệ", "Khác"]} 
          data={data} 
          set={set} 
        />
      </div>
      <div className="fg">
        <label className="fl">Ghi chú thêm</label>
        <textarea 
          className="fi" 
          rows={3} 
          placeholder="Bất kỳ kỳ vọng hay yêu cầu nào chưa được đề cập..." 
          value={data.extraNote} 
          onChange={e => set("extraNote", e.target.value)} 
          style={{ resize: "vertical" }}
        />
      </div>
    </div>
  );
}
