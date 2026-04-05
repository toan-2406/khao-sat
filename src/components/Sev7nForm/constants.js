export const STEPS = [
  { id: 1, label: "Phân Loại", icon: "🏷️", title: "Thông Tin Cơ Sở" },
  { id: 2, label: "Khối Lượng", icon: "⚖️", title: "Khối Lượng & Tần Suất" },
  { id: 3, label: "Danh Mục", icon: "📋", title: "Danh Mục Đồ Giặt" },
  { id: 4, label: "Yêu Cầu", icon: "✨", title: "Yêu Cầu Đặc Biệt" },
  { id: 5, label: "Ngân Sách", icon: "💰", title: "Kỳ Vọng Chi Phí" },
  { id: 6, label: "Giao Nhận", icon: "🚐", title: "Lịch Giao Nhận" },
  { id: 7, label: "Liên Hệ", icon: "📞", title: "Thông Tin Liên Hệ", optional: true },
];

export const initialData = {
  clientType: "", businessName: "", address: "", roomCount: "",
  monthlyKg: "", weeklyFreq: "", peakSeason: "", urgentNeeds: "",
  items: {
    chanGa: false, voGoi: false, khanTam: false, khanMat: false,
    dongPhuc: false, thamSan: false, remCua: false, boBoBaHo: false,
    khanBep: false, khanBan: false, napDem: false, other: false,
  },
  itemsNote: "",
  needWhitening: "", needScent: "", scentType: "", needSterilize: "",
  fabricSensitive: "", specialNote: "",
  budgetRange: "", paymentCycle: "", needVAT: "", currentProvider: "",
  pickupTime: "", deliveryTime: "", fixedSchedule: "", scheduleNote: "",
  contactName: "", phone: "",
  decisionMaker: "", startDate: "", trialRequest: "", referralSource: "", extraNote: "",
};

export const itemLabels = {
  chanGa: "Chăn ga", voGoi: "Vỏ gối", khanTam: "Khăn tắm", khanMat: "Khăn mặt",
  dongPhuc: "Đồng phục NV", thamSan: "Thảm sàn", remCua: "Rèm cửa",
  boBoBaHo: "Đồ bảo hộ (PPE)", khanBep: "Khăn bếp", khanBan: "Khăn bàn",
  napDem: "Nắp đệm", other: "Khác",
};
