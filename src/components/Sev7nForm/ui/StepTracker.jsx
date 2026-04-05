import { STEPS } from "../constants";

export default function StepTracker({ step, setStep }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", marginBottom: 36,
      overflowX: "auto", paddingBottom: 8
    }}>
      {STEPS.map((s, i) => (
        <div key={s.id} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <div 
            style={{ 
              display: "flex", flexDirection: "column", alignItems: "center", 
              gap: 5, cursor: step > s.id ? "pointer" : "default" 
            }} 
            onClick={() => step > s.id && setStep(s.id)}
          >
            <div style={{
              width: 36, height: 36, borderRadius: "50%", 
              display: "flex", alignItems: "center", justifyContent: "center", 
              fontSize: 14, fontWeight: 700,
              background: step === s.id ? (s.optional ? "linear-gradient(135deg,#334155,#475569)" : "linear-gradient(135deg,#c9a227,#e8c84a)")
                : step > s.id ? "rgba(201,162,39,.2)" : "rgba(255,255,255,.05)",
              border: step === s.id ? "none" : step > s.id ? "1.5px solid #c9a227" : "1.5px solid #2d3748",
              color: step === s.id ? "#fff" : step > s.id ? "#c9a227" : "#4b5563",
              transition: "all .3s",
            }}>
              {step > s.id ? "✓" : s.id}
            </div>
            <div style={{
              fontSize: 9, fontWeight: 600, letterSpacing: .5, 
              whiteSpace: "nowrap", 
              color: step === s.id ? (s.optional ? "#475569" : "#c9a227") : step > s.id ? "#6b7280" : "#374151"
            }}>
              {s.label}
            </div>
          </div>
          {i < STEPS.length - 1 && (
            <div style={{
              width: 22, height: 2, margin: "0 3px", marginBottom: 22,
              background: step > s.id ? "linear-gradient(90deg,#c9a227,rgba(201,162,39,.3))" : "#1e2636",
              borderRadius: 2, transition: "background .3s"
            }} />
          )}
        </div>
      ))}
    </div>
  );
}
