import RadioGroup from "../ui/RadioGroup";

export default function Step4Requirements({ data, set }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      <div className="fg">
        <label className="fl">Cần tẩy trắng linen / khăn trắng?</label>
        <RadioGroup field="needWhitening" opts={["Rất cần", "Có nhưng không gấp", "Không cần"]} data={data} set={set} />
      </div>
      <div className="fg">
        <label className="fl">Muốn đồ có mùi hương signature?</label>
        <RadioGroup field="needScent" opts={["Có, rất quan trọng", "Có thì tốt", "Không quan trọng"]} data={data} set={set} />
      </div>
      {data.needScent && data.needScent !== "Không quan trọng" && (
        <div className="fg">
          <label className="fl">Loại mùi hương</label>
          <RadioGroup
            field="scentType"
            opts={["Floral (Hoa tươi)", "Fresh (Biển / Gió)", "Woody (Gỗ / Mộc)", "Citrus (Cam chanh)", "Neutral (Nhẹ nhàng)", "Tư vấn"]}
            data={data}
            set={set}
          />
        </div>
      )}
      <div className="fg">
        <label className="fl">Yêu cầu khử khuẩn tiêu chuẩn?</label>
        <RadioGroup field="needSterilize" opts={["Bắt buộc", "Có thể thêm phí", "Không cần"]} data={data} set={set} />
      </div>
      <div className="fg">
        <label className="fl">Có vải cao cấp / nhạy cảm?</label>
        <RadioGroup field="fabricSensitive" opts={["Có nhiều", "Một ít", "Không có"]} data={data} set={set} />
      </div>
      <div className="fg">
        <label className="fl">Yêu cầu đặc biệt khác</label>
        <textarea
          className="fi"
          rows={3}
          placeholder="VD: không dùng chlorine, gói riêng từng phòng, dán nhãn số phòng..."
          value={data.specialNote}
          onChange={e => set("specialNote", e.target.value)}
          style={{ resize: "vertical" }}
        />
      </div>
    </div>
  );
}
