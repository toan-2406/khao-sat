export default function FormHeader() {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 50, width: "100%" }}>
      <div>
        <div style={{
          fontFamily: "'Montserrat', sans-serif", fontSize: 36,
          fontWeight: 900, color: "#2B3B5A", letterSpacing: -1, lineHeight: 1
        }}>
          Sev7n
        </div>
        <div style={{
          fontSize: 11, fontWeight: 700, color: "#2B3B5A", marginTop: 4, letterSpacing: 0.2
        }}>
          Tìm hiểu nhu cầu của bạn
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10, paddingBottom: 4 }}>
        <div style={{ width: 24, height: 2, backgroundColor: "#6DA396" }}></div>
        <div style={{
          color: "#6DA396", fontStyle: "italic", fontWeight: 700, fontSize: 13, letterSpacing: 0.5
        }}>
          Nhanh chóng / Sạch sẽ / Tiện lợi
        </div>
      </div>
    </div>
  );
}
