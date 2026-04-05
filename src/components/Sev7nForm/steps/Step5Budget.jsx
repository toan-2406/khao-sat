import RadioGroup from "../ui/RadioGroup";

export default function Step5Budget({ data, set }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      <div className="fg">
        <label className="fl">Ngân sách / tháng kỳ vọng</label>
        <RadioGroup 
          field="budgetRange" 
          opts={["Dưới 2 triệu", "2 – 5 triệu", "5 – 10 triệu", "10 – 20 triệu", "Trên 20 triệu", "Linh hoạt theo chất lượng"]} 
          data={data} 
          set={set} 
        />
      </div>
      <div className="fg">
        <label className="fl">Chu kỳ thanh toán</label>
        <RadioGroup field="paymentCycle" opts={["Theo đơn lẻ", "Hàng tuần", "Hàng tháng", "Hàng quý"]} data={data} set={set} />
      </div>
      <div className="fg">
        <label className="fl">Cần xuất hóa đơn VAT?</label>
        <RadioGroup field="needVAT" opts={["Bắt buộc", "Có thì tốt", "Không cần"]} data={data} set={set} />
      </div>
      <div className="fg">
        <label className="fl">Đang dùng dịch vụ giặt từ đâu?</label>
        <RadioGroup 
          field="currentProvider" 
          opts={["Chưa có, tự xử lý", "Giặt là tại chỗ", "Đơn vị khác (chưa hài lòng)", "Đơn vị khác (hài lòng)", "Mới khai trương"]} 
          data={data} 
          set={set} 
        />
      </div>
    </div>
  );
}
