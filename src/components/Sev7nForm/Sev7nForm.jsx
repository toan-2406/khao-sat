import { useState } from "react";
import "./styles/Sev7nForm.css";
import { STEPS, initialData } from "./constants";

// UI Components
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

  const getBgImage = () => {
    if (submitted) return "url('/bg-contact.png')";
    if (step <= 2) return "url('/laundry-bg.png')";
    if (step <= 4) return "url('/bg-sorting.png')";
    if (step === 6) return "url('/bg-delivery.png')";
    return "url('/bg-contact.png')";
  };

  return (
    <div className="layout-container">
      <div className="form-column">
        <div className="form-wrapper">

          {submitted ? (
            <div style={{ flex: 1, overflowY: "auto", paddingRight: 4 }}>
              <SuccessSummary data={data} skipped={skipped} onReset={resetForm} />
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", flex: 1, overflow: "hidden" }}>
              
              <div style={{ flexShrink: 0, paddingBottom: 10 }}>
                <StepTracker step={step} setStep={setStep} />

                <div className="step-title">
                  {STEPS[step - 1].title}
                </div>

                {step === 7 && (
                  <div style={{
                    marginBottom: 16, padding: "14px 18px",
                    background: "#f0f4f8", border: "1px dashed #cbd5e1",
                    borderRadius: 8, display: "flex", gap: 12, alignItems: "flex-start"
                  }}>
                    <span style={{ fontSize: 20, marginTop: 1 }}>💬</span>
                    <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6 }}>
                      Bước này <strong style={{ color: "#334155" }}>không bắt buộc</strong>. Bạn có thể điền để được báo giá chi tiết,
                      hoặc nhấn <em style={{ color: "#6DA396", fontStyle: "normal", fontWeight: 600 }}>"Bỏ qua"</em>.
                    </div>
                  </div>
                )}
              </div>

              {/* Middle Content - Scrollable */}
              <div 
                className="scroll-area" 
                style={{ flex: 1, overflowY: "auto", paddingRight: 8, marginRight: -8, paddingBottom: 20 }}
              >
                {renderStep()}
              </div>

              {/* Bottom Navigation - Fixed */}
              <div style={{ flexShrink: 0, paddingTop: 16, borderTop: "1px solid #f0f4f8" }}>
                <FormNavigation
                  step={step}
                  prev={prev}
                  next={next}
                  handleSubmit={handleSubmit}
                  handleSkip={handleSkip}
                  isSubmitting={isSubmitting}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Column Image Area */}
      <div
        className="image-column"
        style={{ backgroundImage: getBgImage(), transition: "background-image 0.5s ease-in-out" }}
      ></div>
    </div>
  );
}
