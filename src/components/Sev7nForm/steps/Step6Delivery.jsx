import RadioGroup from "../ui/RadioGroup";

export default function Step6Delivery({ data, set }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      <div className="fg">
        <label className="fl">Giờ lấy đồ thuận tiện</label>
        <RadioGroup 
          field="pickupTime" 
          opts={["Sáng sớm (6h – 8h)", "Buổi sáng (8h – 11h)", "Buổi chiều (13h – 17h)", "Linh hoạt"]} 
          data={data} 
          set={set} 
        />
      </div>
      <div className="fg">
        <label className="fl">Thời gian hoàn trả mong muốn</label>
        <RadioGroup field="deliveryTime" opts={["Trong ngày (8–12h)", "24 giờ", "24–48 giờ", "Linh hoạt"]} data={data} set={set} />
      </div>
      <div className="fg">
        <label className="fl">Muốn đặt lịch cố định hàng tuần?</label>
        <RadioGroup field="fixedSchedule" opts={["Có, lịch cố định", "Cần bàn thêm", "Gọi theo nhu cầu"]} data={data} set={set} />
      </div>
      <div className="fg">
        <label className="fl">Ghi chú lịch giao nhận</label>
        <textarea 
          className="fi" 
          rows={3} 
          placeholder="VD: nhận trước 8h sáng, giao vào thứ 6 hàng tuần..." 
          value={data.scheduleNote} 
          onChange={e => set("scheduleNote", e.target.value)} 
          style={{ resize: "vertical" }}
        />
      </div>
    </div>
  );
}
