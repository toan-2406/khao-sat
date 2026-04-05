export default function FormNavigation({ step, prev, next, handleSubmit, handleSkip, isSubmitting }) {
  return (
    <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 16 }}>
      {step === 7 ? (
        <>
          <div style={{ display: "flex", gap: 12 }}>
            <button className="btn-s" onClick={prev} disabled={isSubmitting}>Quay lại</button>
            <button className="btn-p" onClick={handleSubmit} disabled={isSubmitting}>
              {isSubmitting ? "Đang gửi..." : "Gửi thông tin"}
            </button>
          </div>
          <button className="btn-skip" onClick={handleSkip} disabled={isSubmitting}>
            {isSubmitting ? "Đang xử lý..." : "Bạn chưa chắc chắn? Chọn Bỏ qua và chúng tôi sẽ hỗ trợ sau."}
          </button>
        </>
      ) : (
        <div style={{ display: "flex", gap: 12 }}>
          {step > 1 && <button className="btn-s" onClick={prev}>Quay lại</button>}
          <button className="btn-p" onClick={next}>Tiếp tục ›</button>
        </div>
      )}
    </div>
  );
}
