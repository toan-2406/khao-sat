export default function FormNavigation({ step, prev, next, handleSubmit, handleSkip, isSubmitting }) {
  return (
    <div style={{ marginTop: 32 }}>
      {step === 7 ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ display: "flex", gap: 10 }}>
            <button className="btn-s" onClick={prev} style={{ flexShrink: 0 }} disabled={isSubmitting}>← Quay lại</button>
            <button className="btn-p" onClick={handleSubmit} style={{ flex: 1 }} disabled={isSubmitting}>
              {isSubmitting ? "Đang gửi báo giá..." : "🚀 Gửi & Nhận Báo Giá"}
            </button>
          </div>
          <button className="btn-skip" onClick={handleSkip} disabled={isSubmitting}>
            {isSubmitting ? "Đang xử lý..." : "Bỏ qua — Sev7n sẽ chủ động liên hệ theo tên cơ sở đã điền →"}
          </button>
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {step > 1 ? <button className="btn-s" onClick={prev}>← Quay lại</button> : <div />}
          <button className="btn-p" onClick={next}>Tiếp tục →</button>
        </div>
      )}
    </div>
  );
}
