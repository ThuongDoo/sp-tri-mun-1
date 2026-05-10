// ═══════════════════════════════════════════════════════════════════════════════
// ⚙️  CẤU HÌNH NHANH — Chỉnh sửa ở đây, không cần đụng code bên dưới
// ═══════════════════════════════════════════════════════════════════════════════

const CLIENT_CONFIG = {
  scriptUrl:
    "https://script.google.com/macros/s/AKfycbxPg0ns72ylVn8aaiy8Qb7JFpBJzVyOxT0lw2Vp13uyyV7iejB0gJeLb82dETfMdINL/exec", // ← Apps Script URL (deploy 1 lần, dùng chung)
  clientKey: "greenderm", // ← đổi key để chuyển client
  sheetId: "16V4WklPE_rx7f9KgUh4I8EEDGvsEBtJgqpmSjvlCy4I", // ← ID Google Sheet của client
};

// ═══════════════════════════════════════════════════════════════════════════════

// ─── THEMES ──────────────────────────────────────────────────────────────────
// Các tên có sẵn: "emerald" | "rose" | "violet" | "sky" | "amber" | "fuchsia" | "teal"
// ─────────────────────────────────────────────────────────────────────────────
const THEMES = {
  emerald: {
    // 🌿 Xanh lá — spa thiên nhiên, thảo dược
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    gradientFrom: "#10b981",
    gradientTo: "#0d9488",
  },
  rose: {
    // 🌹 Hồng đỏ — nữ tính, lãng mạn
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    gradientFrom: "#f43f5e",
    gradientTo: "#db2777",
  },
  violet: {
    // 💜 Tím — sang trọng, cao cấp
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    gradientFrom: "#8b5cf6",
    gradientTo: "#6d28d9",
  },
  sky: {
    // 🩵 Xanh dương — y tế, tin cậy, sạch sẽ
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    gradientFrom: "#0ea5e9",
    gradientTo: "#0891b2",
  },
  amber: {
    // 🍊 Cam vàng — ấm áp, năng lượng, trẻ trung
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    gradientFrom: "#f59e0b",
    gradientTo: "#ea580c",
  },
  fuchsia: {
    // 🌸 Hồng tím — trendy, trẻ, thẩm mỹ hiện đại
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    gradientFrom: "#d946ef",
    gradientTo: "#a21caf",
  },
  teal: {
    // 🩴 Xanh ngọc — tươi mát, trẻ trung, detox
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    gradientFrom: "#14b8a6",
    gradientTo: "#0d9488",
  },
};

const CLIENTS_DATA = {
  greenderm: {
    theme: "teal", // emerald | rose | violet | sky | amber | fuchsia | teal

    brand: "GreenDerm",
    hotline: "0987 654 321",
    phone: "0987654321",
    address: "123 Nguyễn Thị Minh Khai, Q.3, TP.HCM",
    reviews: "1.243",
    zalo: "https://zalo.me/0987654321",
    messenger: "https://m.me/greenderm",

    pageTitle:
      "GreenDerm • Thoát Mụn – Da Khỏe • Tư Vấn Miễn Phí + Voucher 100k",

    nav: {
      links: [
        { label: "Vấn đề", href: "#pain" },
        { label: "Giải pháp", href: "#solution" },
        { label: "Khách hàng", href: "#review" },
        { label: "Quy trình", href: "#process" },
        { label: "Đăng ký", href: "#form" },
      ],
      cta: "Tư vấn ngay",
    },

    hero: {
      badge: "Đã giúp 8.742 chị lấy lại làn da tự tin",
      headline1: "Mụn dai dẳng + Da nhạy cảm?",
      headline2: "Thoát mụn chỉ sau 28 ngày",
      subtext:
        "Phương pháp thảo dược cao cấp – Không kháng sinh – Không tái phát",
      subCta: "MIỄN PHÍ soi da + Voucher 100k hôm nay",
      ctaBtn: "👉 Đăng ký soi da MIỄN PHÍ ngay",
      rating: "4.98/5",
      ratingLabel: "đánh giá thật",
      beforeAfterLabel: "Trước → Sau 28 ngày",
      testimonialName: "Chị Lan, 26t",
      testimonialResult: "Mụn hết 95% • Da không còn đỏ",
      trustItems: [
        { icon: "fa-shield-alt", text: "Bảo hành 6 tháng" },
        { icon: "fa-medal", text: "Chứng chỉ Bộ Y tế" },
      ],
    },

    trustBar: [
      "🏆 Top 1 trị mụn thảo dược 2025",
      "🔒 Bảo mật thông tin 100%",
      "🚀 Hơn 8700 khách đã thành công",
    ],

    pain: {
      label: "Bạn có đang gặp phải?",
      heading: "Những nỗi đau mà 99% chị em từng trải qua",
      items: [
        { emoji: "🔥", text: "Mụn viêm, mụn nang, mụn đầu đen" },
        { emoji: "😣", text: "Da đỏ rát, kích ứng mỹ phẩm" },
        { emoji: "💸", text: "Tốn tiền trị nhiều nơi vẫn tái phát" },
        { emoji: "😔", text: "Tự ti, ngại chụp ảnh, ngại ra đường" },
      ],
    },

    solution: {
      headingSuffix: "– Giải pháp dành riêng cho da mụn nhạy cảm",
      subtitle: "Kết hợp thảo dược Việt Nam + Công nghệ laser lạnh không đau",
      cards: [
        {
          title: "Liệu trình thảo dược cao cấp",
          desc: "Kem trị mụn từ lá trầu không, nghệ đen, trà xanh hữu cơ",
          badge: null,
          price: null,
          imgId: "201",
        },
        {
          title: "Soi da 3D + Cá nhân hóa",
          desc: "Bác sĩ da liễu 10 năm kinh nghiệm tư vấn trực tiếp",
          badge: null,
          price: null,
          imgId: "237",
        },
        {
          title: 'Combo 28 ngày "Da sạch mãi mãi"',
          desc: null,
          badge: "BEST SELLER",
          price: "Chỉ từ 2.990k (giảm 40% hôm nay)",
          imgId: "180",
        },
      ],
    },

    benefits: {
      heading: "Bạn sẽ nhận được gì?",
      items: [
        {
          emoji: "🌿",
          title: "Mụn giảm 90% chỉ sau 4 tuần",
          sub: "Đã được 2.300+ khách xác nhận",
        },
        {
          emoji: "🧴",
          title: "Da không khô, không bong tróc",
          sub: "An toàn cho da nhạy cảm nhất",
        },
        {
          emoji: "🔄",
          title: "Không tái phát trong 6 tháng",
          sub: "Cam kết bằng hợp đồng",
        },
        { emoji: "📸", title: "Tự tin chụp ảnh • Không cần filter", sub: "" },
        {
          emoji: "💰",
          title: "Tiết kiệm 70% so với spa thông thường",
          sub: "",
        },
        {
          emoji: "❤️",
          title: "Nhóm hỗ trợ Zalo 24/7 suốt liệu trình",
          sub: "",
        },
      ],
    },

    reviewsSection: {
      heading: "Khách hàng thật – Kết quả thật",
      morePrefix: "Và còn ",
      moreSuffix: " đánh giá 5 sao khác trên Google & Facebook",
      items: [
        {
          quote:
            "Mụn cystic hết sạch sau 3 tuần. Da mình giờ trắng hồng luôn ạ! Cảm ơn GreenDerm nhiều lắm 💚",
          author: "Chị Minh Thư, 24t • Quận 7",
          imgId: "64",
          afterImgId: "201",
        },
        {
          quote:
            "Mình bị dị ứng mỹ phẩm nặng, sau khi dùng liệu trình của GreenDerm da hết đỏ, mụn khô chỉ sau 10 ngày. Bác sĩ siêu tận tình!",
          author: "Chị Ngọc Hà, 29t • Bình Thạnh • 1.2k lượt thích",
          imgId: null,
          afterImgId: null,
        },
      ],
      beforeAfterLabel: "Trước & Sau 28 ngày",
      beforeAfterDay1: "Ngày 1",
      beforeAfterDay28: "Ngày 28 ✨",
      beforeAfterBtn: "Tôi cũng muốn như chị này →",
      beforeAfterMsg: "Cảm ơn bạn đã xem! Bạn cũng sẽ như vậy 💚",
    },

    process: {
      heading: "Quy trình 5 bước đơn giản",
      steps: [
        "Đăng ký soi da online",
        "Bác sĩ gọi video soi da",
        "Nhận phác đồ + sản phẩm",
        "Theo dõi hàng tuần qua Zalo",
        "Da sạch – Tự tin – Nhận quà",
      ],
    },

    offer: {
      label: "Ưu đãi chỉ hôm nay • Hết ngày 25/03",
      heading: "Tư vấn soi da + Voucher 100k • Hoàn toàn MIỄN PHÍ",
      cta: "Nhận ngay ưu đãi 🔥 (Còn 37 suất)",
    },

    form: {
      heading: "Đăng ký soi da miễn phí + nhận voucher 100k",
      subtitle: "Chỉ mất 30 giây • Bác sĩ gọi lại trong 5 phút",
      placeholderName: "Họ và tên *",
      placeholderPhone: "Số điện thoại *",
      placeholderEmail: "Email (không bắt buộc)",
      placeholderProblem:
        "Mô tả tình trạng da của bạn (ví dụ: mụn viêm 2 năm, da dầu...)",
      submitBtn: "🚀 GỬI ĐĂNG KÝ – NHẬN VOUCHER NGAY",
      privacyNote: "Bảo mật tuyệt đối",
      branches: "12 chi nhánh TP.HCM & Hà Nội",
    },

    faq: {
      heading: "Câu hỏi thường gặp",
      items: [
        {
          q: "Liệu trình có đau không?",
          a: "Hoàn toàn không đau. Chúng tôi dùng laser lạnh + thảo dược nên rất dịu nhẹ.",
        },
        {
          q: "Chi phí bao nhiêu?",
          a: "Chỉ từ 2.990k cho combo 28 ngày (đã giảm 40% cho 50 người đầu tiên).",
        },
        {
          q: "Có cam kết hiệu quả không?",
          a: "Có! Hoàn tiền 100% nếu mụn không giảm ≥80% sau 28 ngày.",
        },
      ],
    },

    footer: {
      tagline: "Trị mụn thảo dược • Da nhạy cảm • Uy tín từ 2019",
      discountLabel: "Mã giảm giá hôm nay:",
      discountCode: "FREESKIN100",
      scrollTopBtn: "↑ Về đầu trang",
      copyright: "All rights reserved.",
      footerNote: "Code được tạo hoàn chỉnh theo yêu cầu • Chỉnh sửa thoải mái",
    },

    stickyCta: "Nhận voucher 100k + soi da miễn phí",

    alerts: {
      nameError: "Vui lòng nhập họ tên đầy đủ 💚",
      phoneError: "Số điện thoại chưa đúng 💚",
      successMsg:
        "✅ Đăng ký thành công!\nBác sĩ sẽ gọi cho bạn trong 3-5 phút.\nVoucher 100k đã gửi qua Zalo.\nCảm ơn chị đã tin tưởng GreenDerm ❤️",
    },
  },
};

const CLIENT_KEY = CLIENT_CONFIG.clientKey;
const CLIENT = { ...CLIENTS_DATA[CLIENT_KEY], sheetId: CLIENT_CONFIG.sheetId };

document.title = CLIENT.pageTitle;

// ─── THEME ENGINE ────────────────────────────────────────────────────────────
// Ghi đè màu Tailwind theo THEMES[client.theme]. Không cần sửa index.html.
// ─────────────────────────────────────────────────────────────────────────────
function applyTheme(t) {
  const s = document.createElement("style");
  s.textContent = `
    .bg-emerald-50                    { background-color: ${t[50]}  !important }
    .bg-emerald-100                   { background-color: ${t[100]} !important }
    .bg-emerald-500                   { background-color: ${t[500]} !important }
    .bg-emerald-600                   { background-color: ${t[600]} !important }
    .hover\\:bg-emerald-600:hover     { background-color: ${t[600]} !important }
    .hover\\:bg-emerald-700:hover     { background-color: ${t[700]} !important }

    .text-emerald-100                 { color: ${t[100]} !important }
    .text-emerald-200                 { color: ${t[200]} !important }
    .text-emerald-300                 { color: ${t[300]} !important }
    .text-emerald-400                 { color: ${t[400]} !important }
    .text-emerald-500                 { color: ${t[500]} !important }
    .text-emerald-600                 { color: ${t[600]} !important }
    .hover\\:text-emerald-600:hover   { color: ${t[600]} !important }
    .text-emerald-700                 { color: ${t[700]} !important }
    .hover\\:text-emerald-700:hover   { color: ${t[700]} !important }

    .focus\\:border-emerald-500:focus { border-color: ${t[500]} !important }
    .border-emerald-500               { border-color: ${t[500]} !important }

    .hero-bg { background: linear-gradient(135deg, ${t.gradientFrom} 0%, ${t[600]} 100%) !important }

    .from-emerald-600 { --tw-gradient-from: ${t[600]} !important }
    .to-teal-600      { --tw-gradient-to:   ${t.gradientTo} !important }
  `;
  document.head.appendChild(s);
}

applyTheme(THEMES[CLIENT.theme] || THEMES.emerald);

function setClient(key) {
  if (CLIENTS_DATA[key]) {
    Object.assign(CLIENT, CLIENTS_DATA[key]);
  }
}
