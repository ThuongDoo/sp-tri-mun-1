// ─── THEMES ──────────────────────────────────────────────────────────────────
// Các tên có sẵn: "emerald" | "rose" | "violet" | "sky" | "amber" | "fuchsia" | "teal"
//                 "champagne" | "nude" | "blush" | "gold" | "plum" | "silver" | "lavender"
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
  champagne: {
    // 🥂 Vàng champagne — kim loại sáng, tối thượng, premium clinic
    50: "#fdfcef",
    100: "#faf7d6",
    200: "#f5ecaa",
    300: "#ecda6a",
    400: "#dfc236",
    500: "#c9a81c",
    600: "#a48414",
    700: "#7f630f",
    gradientFrom: "#c9a81c",
    gradientTo: "#a48414",
  },
  nude: {
    // 🤍 Nude / Sand Rose — tinh tế, tối giản, sang trọng tự nhiên
    50: "#fdf8f6",
    100: "#faf0eb",
    200: "#f4ddd4",
    300: "#eabfb0",
    400: "#de9882",
    500: "#c97260",
    600: "#aa5445",
    700: "#883d32",
    gradientFrom: "#c97260",
    gradientTo: "#aa5445",
  },
  blush: {
    // 🌸 Hồng phấn — nhẹ nhàng, nữ tính, beauty spa
    50: "#fff0f5",
    100: "#ffe3ee",
    200: "#ffc9e0",
    300: "#ffa0c8",
    400: "#ff6aa8",
    500: "#ef3d85",
    600: "#cc1f68",
    700: "#a41253",
    gradientFrom: "#ef3d85",
    gradientTo: "#cc1f68",
  },
  gold: {
    // ✨ Vàng gold — sang trọng, cao cấp, spa thẩm mỹ
    50: "#fdfbf0",
    100: "#faf4d3",
    200: "#f4e8a0",
    300: "#e8ce5a",
    400: "#d4b034",
    500: "#c09a28",
    600: "#9e7d1e",
    700: "#7b5f16",
    gradientFrom: "#c09a28",
    gradientTo: "#9e7d1e",
  },
  plum: {
    // 🍑 Đỏ mận — quyến rũ, sang trọng, nữ tính sâu lắng
    50: "#fdf2f4",
    100: "#fce7eb",
    200: "#f9d0d9",
    300: "#f3a8b8",
    400: "#e97090",
    500: "#c73b60",
    600: "#a52449",
    700: "#831538",
    gradientFrom: "#a52449",
    gradientTo: "#831538",
  },
  lavender: {
    // 💜 Tím lavender — nhẹ nhàng, thư giãn, spa hoa oải hương
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    gradientFrom: "#a855f7",
    gradientTo: "#7e22ce",
  },
  silver: {
    // 🤍 Trắng xám bạc — tối giản, thanh lịch, tinh tế
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    gradientFrom: "#6b7280",
    gradientTo: "#4b5563",
  },
};

// Nav cố định — không thay đổi theo từng khách hàng
const _NAV = {
  links: [
    { label: "Vấn đề", href: "#pain" },
    { label: "Giải pháp", href: "#solution" },
    { label: "Khách hàng", href: "#review" },
    { label: "Quy trình", href: "#process" },
    { label: "Đăng ký", href: "#form" },
  ],
  cta: "Tư vấn ngay",
};

const _FALLBACK = {
  ...CLIENT_DATA,
  nav: _NAV,
  sheetId: CLIENT_CONFIG.sheetId,
};

// ─── Mode detection ──────────────────────────────────────────────────────────
// Demo:       /demo?brand=GreenDerm&theme=rose&phone=0912345678&logo=https://...
//             → dùng CLIENT_DATA làm gốc, chỉ override brand / theme / phone / logo từ params
// Production: /  → dùng CLIENT_DATA nguyên bản
const _SEARCH = new URLSearchParams(window.location.search);
const _BRAND_PARAM = _SEARCH.get("brand"); // override brand
const _THEME_PARAM = _SEARCH.get("theme"); // ?theme=rose | violet | sky | amber | fuchsia | teal | emerald
const _PHONE_PARAM = _SEARCH.get("phone"); // override phone
const _LOGO_PARAM = _SEARCH.get("logo"); // override logo (URL hoặc data:image/...)

// Demo khi có params hoặc path bắt đầu bằng /demo
const _IS_DEMO =
  window.location.pathname.startsWith("/demo") ||
  !!(_BRAND_PARAM || _THEME_PARAM || _PHONE_PARAM || _LOGO_PARAM);

// Nếu IS_DEMO === false → chặn toàn bộ demo, redirect về production
if (_IS_DEMO && typeof IS_DEMO !== "undefined" && !IS_DEMO) {
  window.location.replace(window.location.pathname.replace(/\/demo\/?/, "/"));
}

// Luôn dùng CLIENT_DATA làm gốc, chỉ override 4 giá trị từ params
const _BASE = { ..._FALLBACK };
if (_BRAND_PARAM) _BASE.brand = _BRAND_PARAM;
if (_THEME_PARAM && THEMES[_THEME_PARAM]) _BASE.theme = _THEME_PARAM;
if (_PHONE_PARAM) _BASE.phone = _PHONE_PARAM;
if (_LOGO_PARAM) {
  const _LOGO_BASE =
    "https://raw.githubusercontent.com/ThuongDoo/spa-img/refs/heads/main/";
  _BASE.logo =
    _LOGO_PARAM.startsWith("http") ||
    _LOGO_PARAM.startsWith("data:") ||
    _LOGO_PARAM.startsWith("/")
      ? _LOGO_PARAM
      : _LOGO_BASE + _LOGO_PARAM;
}

document.title = _BASE.pageTitle;

// ─── THEME ENGINE ────────────────────────────────────────────────────────────
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

applyTheme(THEMES[_BASE.theme] || THEMES.emerald);

// ─── clientApp: nguồn dữ liệu cho Alpine x-data ───────────────────────────────
function clientApp() {
  return {
    ..._BASE,
    imgSrc(id, w, h) {
      if (!id) return `https://picsum.photos/id/1/${w}/${h}`;
      if (id.startsWith("data:") || id.startsWith("http") || id.startsWith("/"))
        return id;
      return `https://picsum.photos/id/${id}/${w}/${h}`;
    },
    init() {},
  };
}

const CLIENT = _BASE;
