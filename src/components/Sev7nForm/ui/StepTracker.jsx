import { STEPS } from "../constants";

export default function StepTracker({ step, setStep }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", marginBottom: 36,
      width: "100%", maxWidth: 360, paddingBottom: 8
    }}>
      {STEPS.map((s, i) => {
        const isPast = step > s.id;
        const isCurrent = step === s.id;
        
        return (
          <div key={s.id} style={{ display: "flex", alignItems: "center", flex: i < STEPS.length - 1 ? 1 : 0 }}>
            <div 
              style={{
                width: 32, height: 32, borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                border: `2px solid ${isCurrent || isPast ? "#6DA396" : "#e2e8f0"}`,
                color: isCurrent || isPast ? "#6DA396" : "#cbd5e1",
                fontWeight: 700, fontSize: 14, fontStyle: "italic",
                backgroundColor: "#ffffff",
                cursor: isPast ? "pointer" : "default",
                flexShrink: 0
              }}
              onClick={() => isPast && setStep(s.id)}
            >
              {isPast ? "✓" : s.id}
            </div>
            
            {i < STEPS.length - 1 && (
              <div style={{
                flex: 1, height: 2,
                backgroundColor: isPast ? "#6DA396" : "#e2e8f0",
                margin: "0 8px"
              }} />
            )}
          </div>
        );
      })}
    </div>
  );
}
