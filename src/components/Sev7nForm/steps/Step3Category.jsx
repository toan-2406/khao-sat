import { itemLabels } from "../constants";

export default function Step3Category({ data, toggleItem, set }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div className="fg">
        <label className="fl">Các loại đồ cần giặt (chọn nhiều)</label>
        <div className="check-grid" style={{ marginTop: 4 }}>
          {Object.entries(itemLabels).map(([key, label]) => (
            <div 
              key={key} 
              className={`ci ${data.items[key] ? "on" : ""}`} 
              onClick={() => toggleItem(key)}
            >
              <div className="cb">
                {data.items[key] && <span style={{ color: "#0a0a0f", fontSize: 12, fontWeight: 900 }}>✓</span>}
              </div>
              {label}
            </div>
          ))}
        </div>
      </div>
      <div className="fg">
        <label className="fl">Ghi chú về loại đồ</label>
        <textarea 
          className="fi" 
          rows={3} 
          placeholder="VD: khăn cotton 500gsm, vải tổng hợp dễ phai màu..." 
          value={data.itemsNote} 
          onChange={e => set("itemsNote", e.target.value)} 
          style={{ resize: "vertical" }}
        />
      </div>
    </div>
  );
}
