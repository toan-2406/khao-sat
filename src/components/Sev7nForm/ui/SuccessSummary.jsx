import { itemLabels } from "../constants";

export default function SuccessSummary({ data, skipped, onReset }) {
  const selectedItems = Object.entries(data.items)
    .filter(([, v]) => v)
    .map(([k]) => itemLabels[k])
    .join(", ");

  const summary = [
    ["Cơ sở", data.clientType ? `${data.businessName} · ${data.clientType}` : data.businessName],
    ["Quy mô", data.roomCount],
    ["Khối lượng", data.monthlyKg],
    ["Tần suất", data.weeklyFreq],
    ["Đồ giặt", selectedItems],
    ["Mùi hương", data.needScent],
    ["Ngân sách", data.budgetRange],
    ["Hoàn trả", data.deliveryTime],
    ["Liên hệ", [data.contactName, data.phone].filter(Boolean).join(" · ") || "–"],
  ].filter(([, v]) => v);

  return (
    <div style={{ width: "100%", textAlign: "left", paddingTop: 20 }}>
      {skipped ? null : <div style={{ fontSize: 48, marginBottom: 16 }}>🌴</div>}
      <div style={{
        fontSize: 32, fontWeight: 700, color: "#2B3B5A", marginBottom: 12, letterSpacing: -0.5
      }}>
        {skipped ? "Đã lưu thành công" : "Cảm ơn quý đối tác!"}
      </div>
      <p style={{ color: "#666666", fontSize: 16, lineHeight: 1.6, marginBottom: 40 }}>
        {skipped
          ? <>Hệ thống đã tiếp nhận thông tin từ <strong style={{ color: "#2B3B5A" }}>{data.businessName}</strong>. Cảm ơn đã tham gia khảo sát.</>
          : <>Hồ sơ chi tiết của <strong style={{ color: "#2B3B5A" }}>{data.businessName}</strong> đã được ghi nhận. Cảm ơn đã tham gia khảo sát.</>
        }
      </p>

      <div style={{ marginBottom: 40 }}>
        <div style={{
          color: "#6DA396", fontStyle: "italic", fontSize: 13, fontWeight: 700,
          marginBottom: 16, display: "flex", alignItems: "center", gap: 8
        }}>
          Tóm tắt nhu cầu phân tích
        </div>
        <div style={{ borderTop: "2px solid #f4f5f6" }}>
          {summary.map(([l, v]) => (
            <div key={l} className="sr">
              <div className="sl">{l}</div>
              <div className="sv">{v}</div>
            </div>
          ))}
        </div>
      </div>

      <button className="btn-s" onClick={onReset}>
        ⟲ Gửi yêu cầu mới
      </button>
    </div>
  );
}
