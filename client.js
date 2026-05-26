// ═══════════════════════════════════════════════════════════════════════════════
// 📦 PRODUCTION DATA — Thay đổi file này cho mỗi khách hàng, không sửa file khác
// ═══════════════════════════════════════════════════════════════════════════════

// true  → cho phép truy cập route /demo
// false → chặn demo, redirect về production (/)
const IS_DEMO = true;

const CLIENT_CONFIG = {
  // Google Sheets (nhận lead)
  scriptUrl:
    "https://script.google.com/macros/s/AKfycbxPg0ns72ylVn8aaiy8Qb7JFpBJzVyOxT0lw2Vp13uyyV7iejB0gJeLb82dETfMdINL/exec",
  clientKey: "greenderm",
  sheetId: "16V4WklPE_rx7f9KgUh4I8EEDGvsEBtJgqpmSjvlCy4I",

  // Telegram (nhận thông báo đăng ký mới)
  telegramToken: "", // ← Token bot từ @BotFather (vd: 123456:ABC-DEF...)
  telegramChatId: "", // ← Chat ID nhóm  (vd: -1001234567890)
};

// Dữ liệu đã mã hoá — xuất từ editor.html rồi paste vào đây
const ENCRYPTED_CLIENT = {};
