import RadioGroup from "../ui/RadioGroup";

export default function Step2Weight({ data, set, errors }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      <div className="fg">
        <label className="fl">Khối lượng ước tính / tháng *</label>
        <RadioGroup 
          field="monthlyKg" 
          opts={["Dưới 50kg", "50 – 150kg", "150 – 300kg", "300 – 500kg", "500kg – 1 tấn", "Trên 1 tấn"]} 
          data={data} 
          set={set} 
        />
        {errors.monthlyKg && <div className="em">⚠ {errors.monthlyKg}</div>}
      </div>
      <div className="fg">
        <label className="fl">Tần suất giao nhận</label>
        <RadioGroup 
          field="weeklyFreq" 
          opts={["Hàng ngày", "3 lần/tuần", "2 lần/tuần", "1 lần/tuần", "Theo đơn lẻ"]} 
          data={data} 
          set={set} 
        />
      </div>
      <div className="fg">
        <label className="fl">Mùa cao điểm</label>
        <select 
          className="fi" 
          value={data.peakSeason} 
          onChange={e => set("peakSeason", e.target.value)}
        >
          <option value="">-- Chọn thời điểm --</option>
          {["Hè (Tháng 5 – 8)", "Tết & Lễ lớn", "Cuối năm (T10 – T12)", "Quanh năm đều nhau", "Chưa xác định"].map(o => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>
      <div className="fg">
        <label className="fl">Nhu cầu giặt gấp / hỏa tốc</label>
        <RadioGroup 
          field="urgentNeeds" 
          opts={["Thường xuyên", "Thỉnh thoảng", "Hiếm khi", "Không cần"]} 
          data={data} 
          set={set} 
        />
      </div>
    </div>
  );
}
