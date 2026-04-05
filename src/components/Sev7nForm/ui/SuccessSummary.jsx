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
    <div style={{ width: "100%", maxWidth: 680, textAlign: "center", padding: "52px 20px" }}>
      <div style={{ fontSize: 56, marginBottom: 16 }}>{skipped ? "📋" : "🎉"}</div>
      <div style={{
        fontFamily: "'Playfair Display',serif", fontSize: 24,
        fontWeight: 900, color: "#f5d060", marginBottom: 10
      }}>
        {skipped ? "Đã ghi nhận khảo sát!" : "Cảm Ơn Quý Đối Tác!"}
      </div>
      <p style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.8, maxWidth: 420, margin: "0 auto 28px" }}>
        {skipped
          ? <>Nhu cầu của <strong style={{ color: "#e2e8f0" }}>{data.businessName}</strong> đã được lưu lại. Liên hệ Sev7n qua Hotline/Zalo bất cứ lúc nào để nhận báo giá.</>
          : <>Chuyên viên sẽ liên hệ <strong style={{ color: "#c9a227" }}>{data.contactName || data.businessName}</strong> trong <strong style={{ color: "#c9a227" }}>2–4 giờ làm việc</strong>.</>
        }
      </p>
      <div style={{
        background: "rgba(201,162,39,.06)",
        border: "1px solid rgba(201,162,39,.18)",
        borderRadius: 16, padding: "20px 24px", 
        marginBottom: 28, textAlign: "left"
      }}>
        <div style={{
          color: "#c9a227", fontSize: 10, fontWeight: 700,
          letterSpacing: 2, textTransform: "uppercase", marginBottom: 12
        }}>
          📋 Tóm Tắt Nhu Cầu
        </div>
        {summary.map(([l, v]) => (
          <div key={l} className="sr">
            <div className="sl">{l}</div>
            <div className="sv">{v}</div>
          </div>
        ))}
      </div>
      <button className="btn-s" onClick={onReset}>
        Điền form mới
      </button>
    </div>
  );
}
