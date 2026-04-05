export default function FormHeader() {
  return (
    <div style={{ width: "100%", maxWidth: 680, marginBottom: 32 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 8 }}>
        <div style={{
          width: 44, height: 44, borderRadius: 12,
          background: "linear-gradient(135deg,#c9a227,#e8c84a)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontWeight: 900, fontSize: 18, color: "#0a0a0f"
        }}>
          7
        </div>
        <div>
          <div style={{
            fontFamily: "'Playfair Display',serif", fontSize: 20,
            fontWeight: 900, color: "#f1f5f9", letterSpacing: 1
          }}>
            SEV7N SOLUTIONS
          </div>
          <div style={{
            fontSize: 11, color: "#c9a227", letterSpacing: 2,
            textTransform: "uppercase", fontWeight: 500
          }}>
            The 7-Step Standard
          </div>
        </div>
      </div>
      <div style={{
        height: 1, background: "linear-gradient(90deg,#c9a227 0%,transparent 100%)",
        marginTop: 16
      }} />
    </div>
  );
}
