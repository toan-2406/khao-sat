import { useState } from "react";
import "./styles/Sev7nForm.css";
import { STEPS, initialData } from "./constants";

// UI Components
import FormHeader from "./ui/FormHeader";
import StepTracker from "./ui/StepTracker";
import FormNavigation from "./ui/FormNavigation";
import SuccessSummary from "./ui/SuccessSummary";

// Step Components
import Step1Classification from "./steps/Step1Classification";
import Step2Weight from "./steps/Step2Weight";
import Step3Category from "./steps/Step3Category";
import Step4Requirements from "./steps/Step4Requirements";
import Step5Budget from "./steps/Step5Budget";
import Step6Delivery from "./steps/Step6Delivery";
import Step7Contact from "./steps/Step7Contact";

export default function Sev7nForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(initialData);
  const [submitted, setSubmitted] = useState(false);
  const [skipped, setSkipped] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const set = (key, val) => setData(d => ({ ...d, [key]: val }));
  const toggleItem = (key) => setData(d => ({ ...d, items: { ...d.items, [key]: !d.items[key] } }));

  const validate = () => {
    const e = {};
    if (step === 1) {
      if (!data.clientType) e.clientType = "Vui lòng chọn loại hình";
      if (!data.businessName.trim()) e.businessName = "Vui lòng nhập tên cơ sở";
    }
    if (step === 2) {
      if (!data.monthlyKg) e.monthlyKg = "Vui lòng chọn khối lượng ước tính";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => { if (validate()) setStep(s => Math.min(s + 1, 7)); };
  const prev = () => { setStep(s => Math.max(s - 1, 1)); setErrors({}); };

  const submitToWebhook = async (finalData) => {
    setIsSubmitting(true);
    try {
      const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;
      
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalData),
      });
      
      setSubmitted(true);
    } catch (err) {
      console.error("Webhook submission error:", err);
      // Show success screen anyway to not break user flow, but log error
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = () => { 
    setSkipped(false); 
    submitToWebhook({ ...data, skipped: false, timestamp: new Date().toISOString() });
  };

  const handleSkip = () => { 
    setSkipped(true);  
    submitToWebhook({ ...data, skipped: true, timestamp: new Date().toISOString() });
  };

  const resetForm = () => { setSubmitted(false); setSkipped(false); setStep(1); setData(initialData); };

  const renderStep = () => {
    const props = { data, set, errors, toggleItem };
    switch (step) {
      case 1: return <Step1Classification {...props} />;
      case 2: return <Step2Weight {...props} />;
      case 3: return <Step3Category {...props} />;
      case 4: return <Step4Requirements {...props} />;
      case 5: return <Step5Budget {...props} />;
      case 6: return <Step6Delivery {...props} />;
      case 7: return <Step7Contact {...props} />;
      default: return null;
    }
  };

  return (
    <div className="form-container" style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#0a0a0f 0%,#111827 50%,#0d1117 100%)",
      fontFamily: "'DM Sans','Segoe UI',sans-serif",
      display: "flex", flexDirection: "column", alignItems: "center",
      padding: "20px 16px 48px",
    }}>
      <FormHeader />

      {submitted ? (
        <SuccessSummary data={data} skipped={skipped} onReset={resetForm} />
      ) : (
        <div style={{ width: "100%", maxWidth: 680 }}>
          <StepTracker step={step} setStep={setStep} />

          <div style={{
            background: "rgba(255,255,255,.03)",
            border: `1px solid ${step === 7 ? "rgba(71,85,105,.3)" : "rgba(255,255,255,.08)"}`,
            borderRadius: 20, padding: "32px 28px",
            boxShadow: "0 8px 48px rgba(0,0,0,.4)",
          }}>
            {/* Title Section */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 24 }}>{STEPS[step - 1].icon}</span>
                <div>
                  <div style={{
                    fontSize: 10, color: step === 7 ? "#475569" : "#c9a227",
                    fontWeight: 700, letterSpacing: 2, textTransform: "uppercase",
                    display: "flex", alignItems: "center", gap: 8
                  }}>
                    Bước {step}/7
                    {step === 7 && (
                      <span style={{
                        padding: "2px 8px", borderRadius: 6,
                        background: "rgba(71,85,105,.2)", border: "1px solid rgba(71,85,105,.4)",
                        color: "#64748b", fontSize: 9, letterSpacing: 1
                      }}>
                        TÙY CHỌN
                      </span>
                    )}
                  </div>
                  <div style={{
                    fontFamily: "'Playfair Display',serif", fontSize: 22,
                    fontWeight: 700, color: "#f1f5f9", marginTop: 2
                  }}>
                    {STEPS[step - 1].title}
                  </div>
                </div>
              </div>

              {step === 7 && (
                <div style={{
                  marginTop: 14, padding: "12px 16px",
                  background: "rgba(51,65,85,.12)", border: "1px dashed rgba(71,85,105,.4)",
                  borderRadius: 10, display: "flex", gap: 10, alignItems: "flex-start"
                }}>
                  <span style={{ fontSize: 18, marginTop: 1 }}>💬</span>
                  <div style={{ fontSize: 12, color: "#64748b", lineHeight: 1.7 }}>
                    Bước này <strong style={{ color: "#94a3b8" }}>không bắt buộc</strong>. Bạn có thể điền để được báo giá nhanh hơn,
                    hoặc nhấn <em style={{ color: "#475569" }}>"Bỏ qua"</em> — Sev7n sẽ chủ động liên hệ theo tên cơ sở đã điền.
                  </div>
                </div>
              )}

              <div style={{ height: 1, background: "rgba(255,255,255,.06)", marginTop: 18 }} />
            </div>

            {/* Form Content */}
            {renderStep()}

            <FormNavigation 
              step={step} 
              prev={prev} 
              next={next} 
              handleSubmit={handleSubmit} 
              handleSkip={handleSkip} 
              isSubmitting={isSubmitting}
            />
          </div>

          {/* Progress Bar Footer */}
          <div style={{ marginTop: 20, height: 3, background: "#1e2636", borderRadius: 2 }}>
            <div style={{
              height: "100%", width: `${(step / 7) * 100}%`,
              background: step === 7 ? "linear-gradient(90deg,#c9a227,#475569)" : "linear-gradient(90deg,#c9a227,#e8c84a)",
              borderRadius: 2, transition: "width .4s ease",
            }} />
          </div>
          <div style={{ display: "flex", justifySpaceBetween: "space-between", marginTop: 6 }}>
            <span style={{ color: "#374151", fontSize: 11 }}>
              {step === 7 && "✦ Bước cuối · Có thể bỏ qua"}
            </span>
            <span style={{ color: "#4b5563", fontSize: 11, fontWeight: 600 }}>{step}/7 · {Math.round((step / 7) * 100)}%</span>
          </div>
        </div>
      )}
    </div>
  );
}
